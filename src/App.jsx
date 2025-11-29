import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import GeneratorView from './components/GeneratorView';
import ModelSwitcher from './components/ModelSwitcher';
import { categories } from './categories';
import './App.css';

function App() {
  // Default to first item of first category
  const [activeItem, setActiveItem] = useState(categories[0].items[0]);
  const [isPro, setIsPro] = useState(false);

  return (
    <div className="app-container">
      <Sidebar
        activeItem={activeItem}
        onSelect={setActiveItem}
      />

      <div className="main-layout">
        <div className="top-bar">
          <ModelSwitcher
            isPro={isPro}
            onToggle={() => setIsPro(!isPro)}
          />
        </div>

        <GeneratorView
          item={activeItem}
          isPro={isPro}
        />
      </div>
    </div>
  );
}

export default App;
