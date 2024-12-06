# Generative AI Web Application (Frontend)

## Overview

This is a frontend web application developed with **React** and **Vite**, which allows users to interact with multiple AI models for various functionalities like image generation, audio-to-text transcription, and recipe generation. The application is designed with a **responsive UI**, **dynamic routing**, and integrates with backend APIs for processing user requests.

## Features

- **Image Generation**: Allows users to generate images using the **DALL-E 3 model** from text descriptions.
- **Audio-to-Text**: Users can upload audio files, which will be transcribed into readable text.
- **Recipe Generator**: Generates recipe ideas based on input ingredients.
- **Responsive Design**: Optimized for both **mobile** and **desktop screens**.
- **Dynamic Routing**: Pages for image generation, audio transcription, and recipe generation, all accessible via **React Router**.

## Technologies Used

### Frontend:

- **React** (v18.2.0)
- **Vite** (for fast bundling and development)
- **Tailwind CSS** (for styling)
- **React Router** (for page routing)
- **Axios** (for API requests)
- **FontAwesome** (for icons)

### Development Tools:

- **ESLint** (for linting)
- **Prettier** (for code formatting)

## Getting Started

To run this project locally, follow the steps below:

### 1. Clone the Repository

Clone the repository using the following command:

```bash
git clone https://github.com/yourusername/Generative-AI-Frontend.git
2. Install Dependencies
Navigate to the project directory and install the required dependencies:

cd Generative-AI-Frontend
npm install

3. Start the Development Server
Run the following command to start the application:

npm run dev
Once the server is running, open your browser and visit http://localhost:3000 to view the application.

Project Structure
Here’s an overview of the project structure:

/src
  /components
    Header.jsx          # Main header with navigation
    ImageUploader.jsx   # Component for image generation
    AudioUploader.jsx   # Component for audio-to-text transcription
    RecipeUploader.jsx  # Component for recipe generation
    AboutDeveloper.jsx  # Developer information page
  /pages
    HomePage.jsx        # Home page with main functionality
    ImagePage.jsx       # Page for image generation
    AudioPage.jsx       # Page for audio transcription
    RecipePage.jsx      # Page for recipe generation
  /styles
    App.css             # Global styles for the app
    tailwind.config.js  # Tailwind CSS configuration
  App.jsx               # Main app entry point
  index.js              # Entry point for React

Live Demo
A live version of the app is available at: https://main.d1roziyo3zgxn7.amplifyapp.com/
Generative AI Web Application


```
