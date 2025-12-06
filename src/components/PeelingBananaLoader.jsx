import React from 'react';
import './PeelingBananaLoader.css';

const PeelingBananaLoader = () => {
    return (
        <div className="peeling-banana-loader">
            <div className="banana-container">
                <svg className="banana-svg" viewBox="0 0 100 100">
                    {/* Banana Body (Flesh) */}
                    <path
                        className="banana-flesh"
                        d="M50 90 C 20 90 10 50 50 10 C 90 50 80 90 50 90"
                        fill="#FFF5C3"
                    />

                    {/* Banana Skin (Main Body) */}
                    <path
                        className="banana-skin-body"
                        d="M50 90 C 20 90 10 50 30 30 L 70 30 C 90 50 80 90 50 90"
                        fill="#FFE135"
                    />

                    {/* Left Peel */}
                    <path
                        className="peel peel-left"
                        d="M30 30 Q 10 10 0 20"
                        stroke="#FFE135"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                    />

                    {/* Right Peel */}
                    <path
                        className="peel peel-right"
                        d="M70 30 Q 90 10 100 20"
                        stroke="#FFE135"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                    />

                    {/* Center Peel */}
                    <path
                        className="peel peel-center"
                        d="M50 30 Q 50 0 50 -10"
                        stroke="#FFE135"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
            <p className="loading-text">Peeling...</p>
        </div>
    );
};

export default PeelingBananaLoader;
