import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import PeelingBananaLoader from './PeelingBananaLoader';
import './GeneratorView.css';

const GeneratorView = ({ item, isPro }) => {
    const [formValues, setFormValues] = useState({});
    const [uploadedFiles, setUploadedFiles] = useState({});
    const [generatedPrompt, setGeneratedPrompt] = useState('');
    const [showPrompt, setShowPrompt] = useState(false);
    const [copied, setCopied] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [isGeneratingImage, setIsGeneratingImage] = useState(false);

    // Reset form when item changes
    useEffect(() => {
        const initialValues = {};
        item.inputs.forEach(input => {
            initialValues[input.name] = '';
        });
        setFormValues(initialValues);
        setUploadedFiles({});
        setGeneratedPrompt('');
        setShowPrompt(false);
        setCopied(false);
        setImageUrl('');
        setIsGeneratingImage(false);
    }, [item]);

    const handleInputChange = (name, value) => {
        setFormValues(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (name, file) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedFiles(prev => ({
                    ...prev,
                    [name]: {
                        data: reader.result.split(',')[1],
                        mimeType: file.type
                    }
                }));
            };
            reader.readAsDataURL(file);
        } else {
            setUploadedFiles(prev => {
                const newFiles = { ...prev };
                delete newFiles[name];
                return newFiles;
            });
        }
    };

    const generatePrompt = () => {
        let prompt = item.template;

        // Replace placeholders
        Object.entries(formValues).forEach(([key, value]) => {
            // Handle both [key] and {{key}} styles if present, though we standardized on [key]
            const regex = new RegExp(`\\[${key}\\]`, 'g');
            prompt = prompt.replace(regex, value || `[${key}]`);
        });

        // Add Pro model specifics if enabled
        if (isPro) {
            prompt = `${prompt} --v 6.0 --style raw`;
        }

        setGeneratedPrompt(prompt);
        setShowPrompt(true);
        setCopied(false);
        return prompt; // Return for image generation
    };



    const generateImage = async () => {
        const prompt = generatePrompt();
        setIsGeneratingImage(true);
        setImageUrl('');

        try {
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
            if (!apiKey) {
                throw new Error("API Key not found. Please check your .env file.");
            }

            const genAI = new GoogleGenerativeAI(apiKey);

            // Select model based on Pro mode
            const modelName = isPro ? "gemini-3-pro-image-preview" : "gemini-2.5-flash-image";
            console.log(`Using model: ${modelName}`);

            // Configure safety settings to be less restrictive for creative tasks
            // This is often needed for image generation queries that might trigger false positives
            const safetySettings = [
                {
                    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                    threshold: HarmBlockThreshold.BLOCK_NONE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                    threshold: HarmBlockThreshold.BLOCK_NONE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                    threshold: HarmBlockThreshold.BLOCK_NONE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                    threshold: HarmBlockThreshold.BLOCK_NONE,
                },
            ];

            const model = genAI.getGenerativeModel({
                model: modelName,
                safetySettings
            });

            // Prepare prompt parts
            const promptParts = [prompt];

            // Add uploaded images if any
            Object.values(uploadedFiles).forEach(file => {
                promptParts.push({
                    inlineData: {
                        data: file.data,
                        mimeType: file.mimeType
                    }
                });
            });

            // Generate content with the prompt
            console.log("Sending prompt with parts count:", promptParts.length);
            const result = await model.generateContent(promptParts);

            console.log("Full API result:", result);
            const response = result.response;
            console.log("Response object:", response);

            // Do NOT call response.text() immediately, as it throws if the response was blocked.
            // console.log("Response text:", response.text());

            // Check if the prompt was blocked entirely (before generation)
            if (response.promptFeedback && response.promptFeedback.blockReason) {
                const reason = response.promptFeedback.blockReason;
                console.error("Prompt blocked:", response.promptFeedback);
                throw new Error(`Prompt was blocked by the model. Reason: ${reason}. This usually means the input images or text violated safety policies.`);
            }

            // Check if the response contains image data
            // The response might contain inline data or a URL
            if (response.candidates && response.candidates[0]) {
                const candidate = response.candidates[0];
                console.log("Candidate:", candidate);

                // Check for safety blocks
                if (candidate.finishReason === 'SAFETY') {
                    const textResponse = candidate.content?.parts?.[0]?.text || "Safety filters triggered";
                    throw new Error(`Image generation blocked by safety filters: ${textResponse}`);
                }

                // Check for OTHER blocks (common with image generation failures)
                if (candidate.finishReason === 'OTHER') {
                    throw new Error("Image generation failed (finishReason: OTHER). This often happens if the model refuses the prompt or image inputs due to safety or policy guidelines, even if safety settings are relaxed.");
                }

                // Look for inline image data in the response
                if (candidate.content && candidate.content.parts) {
                    console.log("Parts:", candidate.content.parts);
                    console.log("Parts JSON:", JSON.stringify(candidate.content.parts, null, 2));
                    for (const part of candidate.content.parts) {
                        console.log("Checking part:", JSON.stringify(part, null, 2));
                        if (part.inlineData && part.inlineData.mimeType && part.inlineData.mimeType.startsWith('image/')) {
                            // Found an image! Convert base64 to data URL
                            const base64Data = part.inlineData.data;
                            const mimeType = part.inlineData.mimeType;
                            const dataUrl = `data:${mimeType};base64,${base64Data}`;
                            setImageUrl(dataUrl);
                            setIsGeneratingImage(false);
                            return;
                        }
                    }

                    // If we get here, check if it's a text response
                    const textPart = candidate.content.parts.find(p => p.text);
                    if (textPart) {
                        throw new Error(`Model returned text instead of image: "${textPart.text}"`);
                    }
                }

                // If we have a candidate but no recognizable image or text
                throw new Error(`No image found in response. FinishReason: ${candidate.finishReason}. Parts: ${candidate.content?.parts?.length || 0}`);
            }

            // If no candidates and no prompt feedback error caught above
            if (response.promptFeedback) {
                throw new Error(`No candidates returned. Prompt Feedback: ${JSON.stringify(response.promptFeedback)}`);
            }
            throw new Error("No candidates returned by the model (and no specific error details found).");

        } catch (error) {
            console.error("Error generating image:", error);
            console.error("Error stack:", error.stack);
            alert("Failed to generate image: " + error.message);
            setIsGeneratingImage(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedPrompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="generator-view">
            <header className="generator-header">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </header>

            <div className="generator-content">
                <div className="form-section">
                    {item.inputs.map(input => (
                        <div key={input.name} className="input-group">
                            <label htmlFor={input.name}>{input.label}</label>
                            {input.type === 'textarea' ? (
                                <textarea
                                    id={input.name}
                                    placeholder={input.placeholder}
                                    value={formValues[input.name] || ''}
                                    onChange={(e) => handleInputChange(input.name, e.target.value)}
                                    rows={4}
                                />
                            ) : input.type === 'file' ? (
                                <input
                                    type="file"
                                    id={input.name}
                                    accept="image/*"
                                    onChange={(e) => handleFileChange(input.name, e.target.files[0])}
                                />
                            ) : input.type === 'combobox' ? (
                                <>
                                    <input
                                        type="text"
                                        id={input.name}
                                        list={`list-${input.name}`}
                                        placeholder={input.placeholder}
                                        value={formValues[input.name] || ''}
                                        onChange={(e) => handleInputChange(input.name, e.target.value)}
                                    />
                                    <datalist id={`list-${input.name}`}>
                                        {(input.options || []).map((opt) => (
                                            <option key={opt} value={opt} />
                                        ))}
                                    </datalist>
                                </>
                            ) : (
                                <input
                                    type={input.type}
                                    id={input.name}
                                    placeholder={input.placeholder}
                                    value={formValues[input.name] || ''}
                                    onChange={(e) => handleInputChange(input.name, e.target.value)}
                                />
                            )}
                        </div>
                    ))}

                    <div className="button-group">
                        <button className="generate-btn" onClick={generatePrompt}>
                            Generate Prompt 🍌
                        </button>
                        <button className="generate-image-btn" onClick={generateImage}>
                            Generate Image 🎨
                        </button>
                    </div>
                </div>

                {showPrompt && (
                    <div className="result-section">
                        <div className="result-header">
                            <h3>Generated Prompt</h3>
                            <button
                                className={`copy-btn ${copied ? 'copied' : ''}`}
                                onClick={copyToClipboard}
                            >
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        <div className="prompt-display">
                            <pre>{generatedPrompt}</pre>
                        </div>
                    </div>
                )}

                {(imageUrl || isGeneratingImage) && (
                    <div className="image-section">
                        <h3>Generated Preview</h3>
                        <div className="image-container">
                            {isGeneratingImage ? (
                                <PeelingBananaLoader />
                            ) : (
                                <img
                                    src={imageUrl}
                                    alt="Generated result"
                                    style={{ display: 'block' }}
                                />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default GeneratorView;
