import React, { useState } from 'react';
import { categories } from '../categories';
import './Sidebar.css';

const Sidebar = ({ activeItem, onSelect }) => {
    const [expandedCategories, setExpandedCategories] = useState(
        categories.map(c => c.id) // Expand all by default
    );

    const toggleCategory = (categoryId) => {
        setExpandedCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h1>Nano Banana 🍌</h1>
                <p className="subtitle">Image Generator</p>
            </div>

            <nav className="sidebar-nav">
                {categories.map(category => (
                    <div key={category.id} className="category-group">
                        <button
                            className="category-header"
                            onClick={() => toggleCategory(category.id)}
                        >
                            {category.title}
                            <span className={`arrow ${expandedCategories.includes(category.id) ? 'expanded' : ''}`}>▼</span>
                        </button>

                        {expandedCategories.includes(category.id) && (
                            <ul className="category-items">
                                {category.items.map(item => (
                                    <li key={item.id}>
                                        <button
                                            className={`item-button ${activeItem?.id === item.id ? 'active' : ''}`}
                                            onClick={() => onSelect(item)}
                                        >
                                            {item.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
