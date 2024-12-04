import { useState } from "react";

function RecipeUploader() {
  const [ingredients, setIngredients] = useState("");
  const [cuisine, setCuisine] = useState("any");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiEndpoint = "/api/v1/get-recipe"; // Ensure this matches your actual API endpoint
  const apiUrl = `${import.meta.env.VITE_API_BASE_URL}${apiEndpoint}`;

  const createRecipe = async () => {
    if (!ingredients) {
      setError("Ingredients are required.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${apiUrl}?ingredients=${ingredients}&dietaryRestrictions=${dietaryRestrictions}&cuisine=${cuisine}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch the recipe.");
      }

      const data = await response.text();
      setRecipe(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Create a Recipe</h2>

      {/* Ingredients Input */}
      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="ingredients"
        >
          Ingredients
        </label>
        <input
          id="ingredients"
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients (comma separated)"
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Cuisine Input */}
      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="cuisine"
        >
          Cuisine Type
        </label>
        <input
          id="cuisine"
          type="text"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          placeholder="Enter cuisine type (optional)"
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Dietary Restrictions Input */}
      <div className="mb-6">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="dietaryRestrictions"
        >
          Dietary Restrictions
        </label>
        <input
          id="dietaryRestrictions"
          type="text"
          value={dietaryRestrictions}
          onChange={(e) => setDietaryRestrictions(e.target.value)}
          placeholder="Enter dietary restrictions (optional)"
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Create Recipe Button */}
      <div className="mb-4">
        <button
          onClick={createRecipe}
          disabled={loading}
          className={`w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200 focus:outline-none ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Creating..." : "Create Recipe"}
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      {/* Recipe Output */}
      {recipe && !loading && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-center mb-4">
            Generated Recipe
          </h3>
          <pre className="bg-gray-100 p-4 rounded-md border border-gray-300">
            {recipe}
          </pre>
        </div>
      )}
    </div>
  );
}

export default RecipeUploader;
