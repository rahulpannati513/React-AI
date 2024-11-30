import { useState } from "react";
import axios from "axios";

const RecipeUploader = () => {
  // State variables
  const [cuisine, setCuisine] = useState("any");
  const [ingredients, setIngredients] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle the form submission
  const fetchRecipe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset any previous errors

    try {
      const apiEndpoint = "/api/v1/get-recipe";
      const apiUrl = import.meta.env.VITE_API_BASE_URL + apiEndpoint;
      const response = await axios.get(apiUrl, {
        params: {
          cuisine,
          ingredients,
          dietaryRestrictions,
        },
      });

      console.log(response.data);
<<<<<<< HEAD
      // Assuming the API returns plain text recipe
=======
>>>>>>> 7727c96 (Generative Ai)
      setRecipe(response.data); // Set the recipe data received from the API
      setLoading(false);
    } catch (err) {
      setError("Error fetching recipe. Please try again later.");
      console.error(err);
      setLoading(false);
    }
  };

  // Utility function to split the recipe plain text into sections
  const parseRecipe = (recipeText) => {
    const titleMatch = recipeText.match(/^Title:\s*(.*)/);
    const ingredientsMatch = recipeText.match(
      /Ingredients:[\s\S]+?(?=Cooking Instructions:|$)/
    );
    const instructionsMatch = recipeText.match(/Cooking Instructions:[\s\S]+/);

    const title = titleMatch ? titleMatch[1].trim() : "Untitled Recipe";
    const ingredients = ingredientsMatch
      ? ingredientsMatch[0].replace("Ingredients:", "").trim()
      : "";
    const instructions = instructionsMatch
      ? instructionsMatch[0].replace("Cooking Instructions:", "").trim()
      : "";

    return { title, ingredients, instructions };
  };

  // Extract the title, ingredients, and instructions
  const {
    title,
    ingredients: rawIngredients,
    instructions: rawInstructions,
  } = recipe ? parseRecipe(recipe) : {};

  // Format ingredients into an array
  const ingredientsList = rawIngredients
    ? rawIngredients
        .split("\n")
        .map((item) => item.trim())
        .filter((item) => item)
    : [];

  // Format cooking instructions as numbered steps
  const cookingSteps = rawInstructions
    ? rawInstructions
        .split("\n")
        .map((step, index) => step.trim() && `${index + 1}. ${step.trim()}`)
        .filter((step) => step)
    : [];

  return (
<<<<<<< HEAD
    <div className="bg-[#1A1A1A] min-h-screen flex flex-col items-center justify-start p-6">
      {/* Form Section */}
      <div className="max-w-xl w-full p-8 bg-[#2C2F36] rounded-xl shadow-lg mb-8">
        <h1 className="text-3xl font-semibold text-center text-white mb-6">
=======
    <div className="bg-white min-h-screen flex flex-col items-center justify-start p-8">
      {/* Form Section */}
      <div className="max-w-3xl w-full p-8 bg-white rounded-xl shadow-md mb-12">
        <h1 className="text-4xl font-semibold text-center text-blue-800 mb-8">
>>>>>>> 7727c96 (Generative Ai)
          Recipe Generator
        </h1>

        <form onSubmit={fetchRecipe} className="space-y-6">
          {/* Cuisine Input */}
          <div>
            <label
              htmlFor="cuisine"
<<<<<<< HEAD
              className="block text-lg font-medium text-[#B0B0B0]"
=======
              className="block text-lg font-semibold text-blue-700"
>>>>>>> 7727c96 (Generative Ai)
            >
              Cuisine Type
            </label>
            <input
              id="cuisine"
              type="text"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
<<<<<<< HEAD
              className="w-full mt-1 px-4 py-3 border border-[#444444] rounded-lg bg-[#3C3F47] text-white placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Italian, Indian"
              aria-label="Cuisine Type"
=======
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg text-blue-900 placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="e.g. Italian, Indian"
>>>>>>> 7727c96 (Generative Ai)
            />
          </div>

          {/* Ingredients Input */}
          <div>
            <label
              htmlFor="ingredients"
<<<<<<< HEAD
              className="block text-lg font-medium text-[#B0B0B0]"
=======
              className="block text-lg font-semibold text-blue-700"
>>>>>>> 7727c96 (Generative Ai)
            >
              Ingredients
            </label>
            <input
              id="ingredients"
              type="text"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
<<<<<<< HEAD
              className="w-full mt-1 px-4 py-3 border border-[#444444] rounded-lg bg-[#3C3F47] text-white placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. chicken, garlic, ginger"
              aria-label="Ingredients"
=======
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg text-blue-900 placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="e.g. chicken, garlic, ginger"
>>>>>>> 7727c96 (Generative Ai)
            />
          </div>

          {/* Dietary Restrictions Input */}
          <div>
            <label
              htmlFor="dietaryRestrictions"
<<<<<<< HEAD
              className="block text-lg font-medium text-[#B0B0B0]"
=======
              className="block text-lg font-semibold text-blue-700"
>>>>>>> 7727c96 (Generative Ai)
            >
              Dietary Restrictions
            </label>
            <input
              id="dietaryRestrictions"
              type="text"
              value={dietaryRestrictions}
              onChange={(e) => setDietaryRestrictions(e.target.value)}
<<<<<<< HEAD
              className="w-full mt-1 px-4 py-3 border border-[#444444] rounded-lg bg-[#3C3F47] text-white placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. vegetarian, gluten-free"
              aria-label="Dietary Restrictions"
=======
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg text-blue-900 placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="e.g. vegetarian, gluten-free"
>>>>>>> 7727c96 (Generative Ai)
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
<<<<<<< HEAD
            className="w-full py-3 bg-blue-600 text-white rounded-lg mt-6 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
=======
            className="w-full py-3 text-xl font-semibold bg-blue-500 text-white rounded-lg mt-6 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
>>>>>>> 7727c96 (Generative Ai)
            disabled={loading} // Disable button while loading
          >
            {loading ? "Fetching Recipe..." : "Get Recipe"}
          </button>
        </form>

        {/* Error Handling */}
<<<<<<< HEAD
        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
=======
        {error && (
          <p className="text-red-500 font-medium text-center mt-4">{error}</p>
        )}
>>>>>>> 7727c96 (Generative Ai)
      </div>

      {/* Recipe Content Section */}
      {recipe && (
<<<<<<< HEAD
        <div className="max-w-xl w-full p-8 bg-[#2C2F36] rounded-xl shadow-lg">
          {/* Title Section */}
          {title && (
            <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
=======
        <div className="max-w-3xl w-full p-8 bg-white rounded-xl shadow-md">
          {/* Title Section */}
          {title && (
            <h2 className="text-3xl font-bold text-blue-800 mb-6">{title}</h2>
>>>>>>> 7727c96 (Generative Ai)
          )}

          {/* Ingredients Section */}
          {ingredientsList.length > 0 && (
            <>
<<<<<<< HEAD
              <h3 className="font-semibold text-xl text-white mb-3">
                Ingredients:
              </h3>
              <ul className="list-disc pl-5 text-[#B0B0B0]">
=======
              <h3 className="font-semibold text-xl text-blue-700 mb-4">
                Ingredients:
              </h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
>>>>>>> 7727c96 (Generative Ai)
                {ingredientsList.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </>
          )}

          {/* Cooking Instructions Section */}
          {cookingSteps.length > 0 && (
            <>
<<<<<<< HEAD
              <h3 className="font-semibold text-xl text-white mt-6 mb-3">
                Cooking Instructions:
              </h3>
              <ol className="list-decimal pl-5 text-[#B0B0B0]">
=======
              <h3 className="font-semibold text-xl text-blue-700 mt-6 mb-4">
                Cooking Instructions:
              </h3>
              <ol className="list-decimal pl-5 text-gray-700 space-y-2">
>>>>>>> 7727c96 (Generative Ai)
                {cookingSteps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipeUploader;
