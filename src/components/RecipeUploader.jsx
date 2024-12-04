import { useState } from "react";
import axios from "axios";

const RecipeUploader = () => {
  // State variables for user input
  const [cuisine, setCuisine] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");

  // State variables for API response and loading/error states
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch recipe from API
  const fetchRecipe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const apiEndpoint = "/api/v1/get-recipe"; // Adjust with your actual API endpoint
      const apiUrl = `${import.meta.env.VITE_API_BASE_URL}${apiEndpoint}`;

      // Passing dynamic user input data in the request params
      const response = await axios.get(apiUrl, {
        params: {
          cuisine,
          ingredients,
          dietaryRestrictions,
        },
      });

      setRecipe(response);
      console.log(response); // Assuming the API returns the recipe data in the `data` field
      setLoading(false);
    } catch (err) {
      setError("Error fetching recipe. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center p-6">
      {/* Form Section */}
      <div className="max-w-xl w-full p-8 bg-white rounded-xl shadow-lg mb-8">
        <h1 className="text-3xl font-semibold text-center text-black mb-6">
          Recipe Generator
        </h1>

        <form onSubmit={fetchRecipe} className="space-y-6">
          {/* Cuisine Input */}
          <div>
            <label
              htmlFor="cuisine"
              className="block text-lg font-medium text-gray-700"
            >
              Cuisine Type
            </label>
            <input
              id="cuisine"
              type="text"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="e.g. Indian, American"
            />
          </div>

          {/* Ingredients Input */}
          <div>
            <label
              htmlFor="ingredients"
              className="block text-lg font-medium text-gray-700"
            >
              Ingredients
            </label>
            <input
              id="ingredients"
              type="text"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="e.g. potatoes, tomatoes, garlic"
            />
          </div>

          {/* Dietary Restrictions Input */}
          <div>
            <label
              htmlFor="dietaryRestrictions"
              className="block text-lg font-medium text-gray-700"
            >
              Dietary Restrictions
            </label>
            <input
              id="dietaryRestrictions"
              type="text"
              value={dietaryRestrictions}
              onChange={(e) => setDietaryRestrictions(e.target.value)}
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="e.g. Oil Free, Gluten-Free"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg mt-6"
            disabled={loading}
          >
            {loading ? "Fetching Recipe..." : "Get Recipe"}
          </button>
        </form>

        {/* Error Message */}
        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
      </div>
      <di>{recipe.data}</di>
    </div>
  );
};

export default RecipeUploader;
