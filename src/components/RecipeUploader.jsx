import React, { useState } from "react";

function RecipeGenerator() {
  const [ingredients, setIngredients] = useState("");
  const [cuisine, setCuisine] = useState("any");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [recipe, setRecipe] = useState(null); // Recipe is now expected to be an object
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // API URL setup based on environment variable
  const apiEndpoint = "/api/v1/get-recipe";
  const apiUrl = `${import.meta.env.VITE_API_BASE_URL}${apiEndpoint}`;

  const createRecipe = async () => {
    if (!ingredients.trim()) {
      setError("Ingredients are required.");
      return;
    }

    setIsLoading(true);
    setError("");
    setRecipe(null); // Clear any previous recipe

    try {
      const response = await fetch(
        `${apiUrl}?ingredients=${ingredients}&dietaryRestrictions=${dietaryRestrictions}&cuisine=${cuisine}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch the recipe.");
      }

      const data = await response.json(); // Assuming the API returns JSON
      if (!data || Object.keys(data).length === 0) {
        throw new Error("No recipe generated.");
      }

      setRecipe(data); // Assuming the API returns a recipe object with keys like title, ingredients, and instructions
    } catch (error) {
      setError(error.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Create a Recipe
      </h2>

      {/* Ingredients Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Ingredients:
        </label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients (comma separated)"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Cuisine Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Cuisine:</label>
        <input
          type="text"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          placeholder="Enter cuisine type"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Dietary Restrictions Input */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Dietary Restrictions:
        </label>
        <input
          type="text"
          value={dietaryRestrictions}
          onChange={(e) => setDietaryRestrictions(e.target.value)}
          placeholder="Enter dietary restrictions"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Generate Button */}
      <button
        onClick={createRecipe}
        disabled={isLoading}
        className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none disabled:bg-gray-300"
      >
        {isLoading ? "Generating..." : "Create Recipe"}
      </button>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded-md">
          {error}
        </div>
      )}

      {/* Recipe Output */}
      <div className="mt-6">
        {recipe && !isLoading && (
          <div className="bg-gray-100 p-4 border border-gray-300 rounded-md">
            <h3 className="text-lg font-semibold text-gray-800">
              {recipe.title}
            </h3>
            <div className="mt-2">
              <h4 className="text-md font-medium text-gray-700">
                Ingredients:
              </h4>
              <ul className="list-disc pl-5 text-gray-600">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.amount} {ingredient.item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="text-md font-medium text-gray-700">
                Instructions:
              </h4>
              <ol className="list-decimal pl-5 text-gray-600">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>{instruction.detail}</li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeGenerator;
