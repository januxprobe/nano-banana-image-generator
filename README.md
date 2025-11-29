# Nano Banana Image Generator 🍌

A powerful web application designed to generate high-fidelity prompts for the Nano Banana AI model. This tool helps users create complex, photorealistic, and creative image prompts using structured templates and categories.

## Features

- **11+ Categories**: Ranging from Photorealism and E-commerce to Creative Experiments and Memes.
- **Dynamic Prompt Builder**: Interactive forms that construct complex prompts based on specific templates.
- **Model Switcher**: Toggle between **Standard** and **Pro** models to automatically adjust prompt syntax (e.g., adding `--v 6.0 --style raw`).
- **One-Click Copy**: Easily copy generated prompts to your clipboard.
- **Responsive Design**: A modern, dark-themed interface built with React and Vanilla CSS.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/januxprobe/nano-banana-image-generator.git
    cd nano-banana-image-generator
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## Usage

1.  **Select a Category**: Use the sidebar to browse through different categories like "Photorealism & Aesthetics" or "Social Media & Marketing".
2.  **Choose a Template**: Click on a specific generator (e.g., "Hyper-Realistic Crowd").
3.  **Fill in the Details**: Enter the required information in the form fields (Subject, Environment, etc.).
4.  **Select Model**: Use the toggle in the top right to switch between Standard and Pro models.
5.  **Generate**: Click the "Generate Prompt" button.
6.  **Copy**: Click "Copy" to save the prompt to your clipboard and use it with the Nano Banana model.

## Technologies

- **React**: UI Library
- **Vite**: Build tool
- **Vanilla CSS**: Custom styling with CSS variables

## License

This project is licensed under the MIT License.

## Acknowledgements

This application is based on the curated prompts and information from the [Awesome Nano Banana Pro](https://github.com/ZeroLu/awesome-nanobanana-pro) repository.

A huge thanks to **[ZeroLu](https://github.com/ZeroLu)** for building and maintaining this incredible library of prompts and resources! 🍌
