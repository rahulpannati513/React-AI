import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function App() {
  const [userInput, setUserInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle the input change in the text area
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

<<<<<<< HEAD
  // Handle the AI response request when the button is clicked
=======
  // Handle the AI response request
>>>>>>> 7727c96 (Generative Ai)
  const handleResponse = async () => {
    if (!userInput.trim()) {
      setAiResponse("Please enter a description or a question.");
      return;
    }

    setIsLoading(true);
<<<<<<< HEAD
    setAiResponse(""); // Clear previous response

    try {
      // Send request to backend to get AI response
=======
    setAiResponse("");

    try {
>>>>>>> 7727c96 (Generative Ai)
      const response = await axios.get(
        "http://last-spring-ai-env.eba-mnr3mumu.eu-north-1.elasticbeanstalk.com/api/v1/chat",
        {
          params: { message: userInput },
        }
      );

<<<<<<< HEAD
      console.log(response.data);
      setAiResponse(response.data.generation); // Set AI response
      setIsLoading(false); // Set loading to false
    } catch (error) {
      console.error("Error fetching AI response", error);
      setAiResponse("Error generating response. Please try again.");
      setIsLoading(false); // Set loading to false
    }
  };

  // Function to split the AI response and detect code block
=======
      setAiResponse(response.data.generation);
    } catch (error) {
      console.error("Error fetching AI response", error);
      setAiResponse("Error generating response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Render response with optional code block styling
>>>>>>> 7727c96 (Generative Ai)
  const renderResponse = (response) => {
    const regex = /```([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(response)) !== null) {
      if (match.index > lastIndex) {
        parts.push(response.slice(lastIndex, match.index));
      }

      parts.push(
        <pre
          key={match.index}
<<<<<<< HEAD
          className="bg-[#1D1D1D] text-white p-4 rounded-lg overflow-x-auto shadow-md"
=======
          className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto shadow-md"
>>>>>>> 7727c96 (Generative Ai)
        >
          <code>{match[1]}</code>
        </pre>
      );

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < response.length) {
      parts.push(response.slice(lastIndex));
    }

<<<<<<< HEAD
    return <>{parts}</>; // Return wrapped parts as a fragment
  };

  return (
    <div className="bg-gradient-to-b from-[#121212] to-[#1D1D1D] text-white min-h-screen">
      {/* Main Content */}
      <section className="py-20 px-6 lg:px-16 text-center">
        <h2 className="text-5xl font-bold text-teal-500 mb-6 ">
          Ask AI Anything
        </h2>
        <div className="max-w-xl mx-auto bg-[#1D1D1D] p-8 rounded-lg shadow-xl">
=======
    return <>{parts}</>;
  };

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      {/* Header */}
      <header className="py-6 bg-gradient-to-r  text-center">
        <h1 className="text-4xl font-bold">AI Assistant Platform</h1>
        <p className="mt-2 text-lg">
          Ask AI anything and explore its capabilities
        </p>
      </header>

      {/* Main Content */}
      <main className="py-12 px-6 lg:px-16">
        <section className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Ask AI Anything
          </h2>
>>>>>>> 7727c96 (Generative Ai)
          <textarea
            value={userInput}
            onChange={handleInputChange}
            placeholder="Type your question or description here..."
<<<<<<< HEAD
            rows="6"
            className="w-full p-4 text-lg text-gray-300 border border-[#333333] rounded-lg mb-4 bg-[#2A2A2A] placeholder-[#B0B0B0] overflow-y-auto resize-none focus:outline-none focus:ring-2 focus:ring-[#444444]"
            aria-label="Input field for question or description"
          ></textarea>
          <button
            onClick={handleResponse}
            className="w-full py-3 bg-[#444444] text-white text-lg rounded-lg hover:bg-[#333333] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            aria-live="polite" // Allow the screen reader to notify the user of updates
          >
            {isLoading ? (
              <span className="animate-spin">🌀</span>
            ) : (
              "Get AI Response"
            )}
          </button>

          {aiResponse && !isLoading && (
            <div className="mt-6 p-6 bg-[#1D1D1D] rounded-lg text-gray-100 opacity-90 max-h-96 overflow-y-auto shadow-xl">
              {/* Render AI response */}
              {renderResponse(aiResponse)}
            </div>
          )}
        </div>
      </section>

      {/* Explore AI Models Section */}
      <section className="py-20 bg-gradient-to-b from-[#121212] to-[#1D1D1D] text-center">
        <h2 className="text-5xl font-bold text-teal-500 mb-12">
          Explore AI Models
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6">
          {/* DALL-E 3 Preview */}
          <Link
            to="/image"
            className="bg-gradient-to-br from-[#1D1D1D] to-[#2A2A2A] p-8 rounded-lg shadow-lg hover:bg-gradient-to-bl from-[#333333] to-[#2A2A2A] transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            aria-label="DALL-E 3 image generation model"
          >
            <h3 className="text-2xl font-semibold text-white mb-4 opacity-70">
              DALL-E 3
            </h3>
            <img
              src="https://images.ctfassets.net/kftzwdyauwt9/ed21faee-ce44-4d91-f5cc39941d47/bdd3983530857e93d205304e219e2d95/dall-e.jpg?w=3840&q=90&fm=webp"
              alt="Generated by DALL-E 3"
              className="w-full h-auto mb-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            />
            <p className="text-gray-300 text-lg">
              Generate stunning, high-quality images from any text description.
            </p>
          </Link>

          {/* Audio-to-Text Preview */}
          <Link
            to="/audio"
            className="bg-gradient-to-br from-[#1D1D1D] to-[#2A2A2A] p-8 rounded-lg shadow-lg hover:bg-gradient-to-bl from-[#333333] to-[#2A2A2A] transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            aria-label="Audio-to-Text AI model"
          >
            <h3 className="text-2xl font-semibold text-white mb-4 opacity-70">
              Audio-to-Text
            </h3>

            {/* Video/Image Section */}
            <div className="flex justify-center mb-4 w-full">
              <img
                src="https://images.ctfassets.net/kftzwdyauwt9/9c95036b-c2f5-4af8-ef2dfdd10ec8/ab4206ed7dbd28ac30f228499ca5766e/chatgpt-can-now-see-hear-and-speak-alt.jpg?w=3840&q=90&fm=webp"
                alt="Audio-to-Text"
                className="w-full h-auto max-w-[320px] rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              />
            </div>

            {/* Video Description */}
            <p className="text-gray-300 text-lg">
              Convert spoken language into accurate, readable text instantly.
            </p>
          </Link>

          {/* AI-Powered Recipe Generation */}
          <Link
            to="/recipe"
            className="bg-gradient-to-br from-[#1D1D1D] to-[#2A2A2A] p-8 rounded-lg shadow-lg hover:bg-gradient-to-bl from-[#333333] to-[#2A2A2A] transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            aria-label="AI Recipe Generator"
          >
            <h3 className="text-2xl font-semibold text-white mb-4 opacity-70">
              AI Recipe Generator
            </h3>
            <img
              src="https://images.ctfassets.net/kftzwdyauwt9/21GoFN3USoFH1VE6ERRD4g/b6934085e667c97956fcfde5db305a99/Search_Card.png?w=3840&q=90&fm=webp"
              alt="Recipe Generation"
              className="w-auto h-auto mb-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            />
            <p className="text-gray-300 text-lg">
              Generate personalized recipes based on ingredients and
              preferences.
            </p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-[#121212] text-center text-gray-400">
        <p>&copy; 2024 Your AI Platform. All Rights Reserved.</p>
=======
            rows="5"
            className="w-full p-4 text-lg border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>
          <button
            onClick={handleResponse}
            className={`w-full mt-4 py-3 text-lg font-semibold text-white rounded-lg transition ${
              isLoading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-500"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Get AI Response"}
          </button>

          {aiResponse && (
            <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-lg overflow-y-auto max-h-96">
              {renderResponse(aiResponse)}
            </div>
          )}
        </section>

        {/* Explore AI Models */}
        <section className="mt-12">
          <h2 className="text-4xl font-semibold text-center mb-8">
            Explore AI Models
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* DALL-E */}
            <Link
              to="/image"
              className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4">DALL-E 3</h3>
              <img
                src="https://images.ctfassets.net/kftzwdyauwt9/ed21faee-ce44-4d91-f5cc39941d47/bdd3983530857e93d205304e219e2d95/dall-e.jpg?w=3840&q=90&fm=webp"
                alt="DALL-E"
                className="rounded-lg mb-4"
              />
              <p>
                Generate stunning, high-quality images from text descriptions.
              </p>
            </Link>

            {/* Audio-to-Text */}
            <Link
              to="/audio"
              className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4">Audio-to-Text</h3>
              <img
                src="https://images.ctfassets.net/kftzwdyauwt9/9c95036b-c2f5-4af8-ef2dfdd10ec8/ab4206ed7dbd28ac30f228499ca5766e/chatgpt-can-now-see-hear-and-speak-alt.jpg?w=3840&q=90&fm=webp"
                alt="Audio-to-Text"
                className="rounded-lg mb-4"
              />
              <p>
                Convert spoken language into accurate, readable text instantly.
              </p>
            </Link>

            {/* Recipe Generator */}
            <Link
              to="/recipe"
              className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4">
                AI Recipe Generator
              </h3>
              <img
                src="https://images.ctfassets.net/kftzwdyauwt9/21GoFN3USoFH1VE6ERRD4g/b6934085e667c97956fcfde5db305a99/Search_Card.png?w=3840&q=90&fm=webp"
                alt="Recipe Generation"
                className="rounded-lg mb-4"
              />
              <p>
                Create personalized recipes based on ingredients and
                preferences.
              </p>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-gray-200 text-center text-gray-700">
        <p>&copy; 2024 AI Assistant Platform. All Rights Reserved.</p>
>>>>>>> 7727c96 (Generative Ai)
      </footer>
    </div>
  );
}

export default App;
