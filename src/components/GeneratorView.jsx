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
    const [explanationText, setExplanationText] = useState('');
    const [isGeneratingImage, setIsGeneratingImage] = useState(false);
    const [isGeneratingExplanation, setIsGeneratingExplanation] = useState(false);

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
        setExplanationText('');
        setIsGeneratingImage(false);
        setIsGeneratingExplanation(false);
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
        let prompt = generatePrompt();
        setIsGeneratingImage(true);
        setImageUrl('');
        setExplanationText('');
        setIsGeneratingExplanation(false);

        try {
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
            if (!apiKey) {
                throw new Error("API Key not found. Please check your .env file.");
            }

            const genAI = new GoogleGenerativeAI(apiKey);
            let analysisText = '';

            // --- 1. Sequential Explanation Generation (Logic First) ---
            if (item.explanationTemplate) {
                setIsGeneratingExplanation(true);
                try {
                    console.log("Starting analysis...");
                    let explanationPrompt = item.explanationTemplate;
                    Object.entries(formValues).forEach(([key, value]) => {
                        const regex = new RegExp(`\\[${key}\\]`, 'g');
                        explanationPrompt = explanationPrompt.replace(regex, value || `[${key}]`);
                    });

                    // Use Gemini 2.0 Flash for analysis
                    const textModel = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

                    const textParts = [{ text: explanationPrompt }];
                    Object.values(uploadedFiles).forEach(file => {
                        textParts.push({
                            inlineData: { data: file.data, mimeType: file.mimeType }
                        });
                    });

                    const result = await textModel.generateContent(textParts);
                    const response = await result.response;
                    analysisText = response.text();

                    setExplanationText(analysisText);
                    console.log("Analysis complete:", analysisText.substring(0, 50) + "...");

                } catch (err) {
                    console.error("Explanation generation failed:", err);
                    setExplanationText("Failed to generate analysis. " + err.message);
                    // Continue to image generation even if analysis fails
                } finally {
                    setIsGeneratingExplanation(false);
                }
            }

            // --- 2. Image Generation (Guided by Analysis) ---
            try {
                // Select model based on Pro mode
                const modelName = isPro ? "gemini-3-pro-image-preview" : "gemini-2.5-flash-image";
                console.log(`Using image model: ${modelName}`);

                const safetySettings = [
                    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
                    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
                    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
                    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
                ];

                const model = genAI.getGenerativeModel({ model: modelName, safetySettings });

                // ENHANCE PROMPT WITH ANALYSIS
                // ENHANCE PROMPT WITH ANALYSIS
                if (analysisText) {
                    prompt += ` . Use the following analysis to guide the generation: ${analysisText}`;
                }
                const effectivePrompt = prompt + " . ensure the output is high quality. these are fictional characters for a creative project.";

                const promptParts = [{ text: effectivePrompt }];

                // Add uploaded images if any to the image model too
                // FILTER: Only add IMAGE files to the image generation model. 
                // PDFs/Text files should only be used in the Analysis phase (step 1).
                Object.values(uploadedFiles).forEach(file => {
                    if (file.mimeType.startsWith('image/')) {
                        promptParts.push({
                            inlineData: { data: file.data, mimeType: file.mimeType }
                        });
                    }
                });

                console.log("Sending prompt with parts count:", promptParts.length);

                const handleResponse = (result) => {
                    const response = result.response;
                    if (response.promptFeedback && response.promptFeedback.blockReason) {
                        throw new Error(`Prompt blocked: ${response.promptFeedback.blockReason}`);
                    }
                    if (response.candidates && response.candidates[0]) {
                        const candidate = response.candidates[0];
                        if (candidate.finishReason === 'SAFETY') {
                            throw new Error(`Blocked by safety filters`);
                        }
                        if (candidate.finishReason === 'OTHER') {
                            throw new Error("BLOCK_OTHER");
                        }
                        if (candidate.content && candidate.content.parts) {
                            for (const part of candidate.content.parts) {
                                if (part.inlineData && part.inlineData.mimeType && part.inlineData.mimeType.startsWith('image/')) {
                                    const base64Data = part.inlineData.data;
                                    const mimeType = part.inlineData.mimeType;
                                    const dataUrl = `data:${mimeType};base64,${base64Data}`;
                                    setImageUrl(dataUrl);
                                    setIsGeneratingImage(false);
                                    return true;
                                }
                            }
                        }
                        throw new Error(`No image found. FinishReason: ${candidate.finishReason}`);
                    }
                    throw new Error("No candidates returned.");
                };

                try {
                    const result = await model.generateContent(promptParts);
                    handleResponse(result);
                } catch (error) {
                    console.log("Image Gen Error detected:", error.message);

                    const isBlockingError =
                        error.message.includes("BLOCK_OTHER") ||
                        error.message.includes("Safety") ||
                        error.message.includes("blocked") ||
                        error.message.includes("filters") ||
                        error.message.includes("FinishReason");

                    if (isBlockingError) {
                        console.log("Caught Blocking Error, retrying with safer prompt...");
                        const safePrompt = prompt + " . (fictional character design, cgi, digital art, no real people)";
                        const safePromptParts = [{ text: safePrompt }];
                        // Same filter for retry
                        Object.values(uploadedFiles).forEach(file => {
                            if (file.mimeType.startsWith('image/')) {
                                safePromptParts.push({ inlineData: { data: file.data, mimeType: file.mimeType } });
                            }
                        });

                        try {
                            // Retry 1: Same model, safe prompt
                            const retryResult = await model.generateContent(safePromptParts);
                            handleResponse(retryResult);
                        } catch (retryError) {
                            console.log("Retry 1 failed, attempting fallback to Flash Image model...");
                            // Retry 2: Flash model (often more permissive), safe prompt
                            try {
                                const fallbackModel = genAI.getGenerativeModel({
                                    model: "gemini-2.5-flash-image",
                                    safetySettings
                                });
                                const finalRetryResult = await fallbackModel.generateContent(safePromptParts);
                                handleResponse(finalRetryResult);
                            } catch (finalError) {
                                console.error("All retries failed.");
                                throw finalError; // Throw the final error to display alert
                            }
                        }
                    } else {
                        throw error;
                    }
                }

            } catch (error) {
                console.error("Error generating image:", error);
                alert("Failed to generate image: " + error.message);
                setIsGeneratingImage(false);
            }

        } catch (error) {
            console.error("GenAI Init Error:", error);
            setIsGeneratingImage(false);
            setIsGeneratingExplanation(false);
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
                                    accept={input.accept || "image/*"}
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

                {/* Explanation Section */}
                {(explanationText || isGeneratingExplanation) && (
                    <div className="explanation-section" style={{ marginTop: '20px', marginBottom: '20px', padding: '15px', background: '#252529', borderRadius: '12px', border: '1px solid #333' }}>
                        <h3>Design Analysis (Gemini 2.0 Flash)</h3>
                        {isGeneratingExplanation ? (
                            <p style={{ color: '#888', fontStyle: 'italic' }}>Analyzing design patterns...</p>
                        ) : (
                            <div className="explanation-text" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', color: '#e0e0e0' }}>
                                {explanationText}
                            </div>
                        )}
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
