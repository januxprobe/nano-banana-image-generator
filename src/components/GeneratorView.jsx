import React, { useState, useEffect } from 'react';
import './GeneratorView.css';

const GeneratorView = ({ item, isPro }) => {
    const [formValues, setFormValues] = useState({});
    const [generatedPrompt, setGeneratedPrompt] = useState('');
    const [showPrompt, setShowPrompt] = useState(false);
    const [copied, setCopied] = useState(false);

    // Reset form when item changes
    useEffect(() => {
        const initialValues = {};
        item.inputs.forEach(input => {
            initialValues[input.name] = '';
        });
        setFormValues(initialValues);
        setGeneratedPrompt('');
        setShowPrompt(false);
        setCopied(false);
    }, [item]);

    const handleInputChange = (name, value) => {
        setFormValues(prev => ({
            ...prev,
            [name]: value
        }));
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
            prompt = `Nano Banana Pro: ${prompt} --v 6.0 --style raw`;
        }

        setGeneratedPrompt(prompt);
        setShowPrompt(true);
        setCopied(false);
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

                    <button className="generate-btn" onClick={generatePrompt}>
                        Generate Prompt 🍌
                    </button>
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
            </div>
        </main>
    );
};

export default GeneratorView;
