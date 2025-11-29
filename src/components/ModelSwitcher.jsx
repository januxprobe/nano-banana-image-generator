import React from 'react';
import './ModelSwitcher.css';

const ModelSwitcher = ({ isPro, onToggle }) => {
    return (
        <div className="model-switcher">
            <span className={`model-label ${!isPro ? 'active' : ''}`}>Standard</span>
            <button
                className={`switch-track ${isPro ? 'pro' : ''}`}
                onClick={onToggle}
                aria-label="Toggle Model"
            >
                <div className="switch-thumb" />
            </button>
            <span className={`model-label ${isPro ? 'active' : ''}`}>Pro 🍌</span>
        </div>
    );
};

export default ModelSwitcher;
