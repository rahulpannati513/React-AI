import { useState, useEffect, useRef } from "react";
import axios from "axios";

const ImageUploader = () => {
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [imageLoading, setImageLoading] = useState(true);
  const [showGuidelines, setShowGuidelines] = useState(false);
  const guidelinesRef = useRef(null);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleGenerateImage = async () => {
    if (!message.trim()) {
      setError("Please enter a description to generate an image.");
      return;
    }

    setLoading(true);
    setError("");
    setImageUrl("");
    const apiEndpoint = "/api/v1/generate-image";
    const apiUrl = import.meta.env.VITE_API_BASE_URL + apiEndpoint;

    try {
      const response = await axios.get(apiUrl, {
        params: { message: message },
      });

      const generatedImageUrl = response?.data?.result?.output?.url || "";

      if (generatedImageUrl) {
        setImageUrl(generatedImageUrl);
        setImageLoading(true);
      } else {
        setError("Failed to generate an image. Please try again.");
      }

      setLoading(false);
    } catch (err) {
      setError("Error occurred while generating image. Please try again.");
      setLoading(false);
    }
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const downloadImage = async (e) => {
    e.preventDefault();
    const imageUrl = e.target.href;

    try {
      const response = await fetch(imageUrl);
      const buffer = await response.arrayBuffer();
      const blob = new Blob([buffer]);
      const downloadUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", "generated-image.png");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Error downloading image:", err);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        guidelinesRef.current &&
        !guidelinesRef.current.contains(event.target)
      ) {
        setShowGuidelines(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative bg-white min-h-screen flex justify-center items-center text-gray-800">
      {showGuidelines && (
        <div
          ref={guidelinesRef}
          className="absolute top-0 left-0 m-6 bg-white text-black p-6 rounded-lg shadow-xl max-w-sm w-full z-50"
        >
          <h3 className="text-2xl font-semibold">Guidelines</h3>
          <ul className="list-disc pl-6 mt-4 text-lg">
            <li>Provide clear, concise descriptions for better results.</li>
            <li>Avoid harmful or offensive content.</li>
            <li>Be creative with your descriptions.</li>
          </ul>
        </div>
      )}

      <button
        onClick={() => setShowGuidelines(!showGuidelines)}
        className="absolute top-6 left-6 text-lg text-gray-800 hover:text-indigo-500"
      >
        {showGuidelines ? "Hide Guidelines" : "View Guidelines"}
      </button>

      <div className="flex flex-col lg:flex-row w-full max-w-7xl px-6 py-12 space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Left Section */}
        <div className="w-full lg:w-2/5 bg-white p-8 rounded-lg shadow-lg space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
            AI-Driven Image Generation
          </h1>
          <p className="text-lg sm:text-xl text-center text-gray-600">
            Turn your text descriptions into stunning visuals in seconds.
          </p>
          <textarea
            className="w-full p-4 text-xl text-black border-none rounded-lg shadow-md bg-gray-100 focus:ring-2 focus:ring-indigo-500 transition-all"
            placeholder="Describe the image you want to generate..."
            value={message}
            onChange={handleInputChange}
            rows="6"
          ></textarea>
          <button
            onClick={handleGenerateImage}
            className="w-full sm:w-auto text-xl bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Image"}
          </button>
          {error && (
            <div className="mt-4 text-red-600 font-semibold bg-red-100 p-4 rounded-lg shadow-lg">
              <p>{error}</p>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-3/5 p-8 bg-white rounded-lg shadow-lg space-y-6">
          <h3 className="text-2xl text-center text-gray-800">
            Your Generated Image
          </h3>
          {loading && (
            <div className="flex justify-center items-center w-full h-64 bg-gray-100 rounded-lg shadow-lg">
              <div className="animate-spin rounded-full border-4 border-t-4 border-gray-400 w-16 h-16 mb-4"></div>
              <p className="text-gray-600">Generating...</p>
            </div>
          )}

          {imageUrl && !loading && (
            <div className="w-full bg-gray-100 p-6 rounded-lg shadow-lg overflow-hidden">
              <img
                src={imageUrl}
                alt="Generated"
                onLoad={handleImageLoad}
                loading="lazy"
                className={`w-full max-h-[400px] object-cover rounded-lg shadow-xl transition-opacity duration-500 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                }`}
              />
              <a
                href={imageUrl}
                download
                onClick={downloadImage}
                className="mt-6 inline-block text-xl py-3 px-8 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white rounded-full shadow-lg hover:bg-indigo-500 transform hover:scale-105 transition-all duration-300"
              >
                Download Image
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
