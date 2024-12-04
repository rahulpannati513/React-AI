import React, { useState } from "react";

function RecipeGenerator() {
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
    <div>
      <h2>Create a Recipe</h2>

      {/* Ingredients Input */}
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter ingredients (comma separated)"
      />

      {/* Cuisine Input */}
      <input
        type="text"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        placeholder="Enter cuisine type (optional)"
      />

      {/* Dietary Restrictions Input */}
      <input
        type="text"
        value={dietaryRestrictions}
        onChange={(e) => setDietaryRestrictions(e.target.value)}
        placeholder="Enter dietary restrictions (optional)"
      />

      {/* Create Recipe Button */}
      <button onClick={createRecipe} disabled={loading}>
        {loading ? "Creating..." : "Create Recipe"}
      </button>

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Recipe Output */}
      {recipe && !loading && (
        <div className="output">
          <h3>Generated Recipe:</h3>
          <pre className="recipe-text">{recipe}</pre>
        </div>
      )}
    </div>
  );
}

export default RecipeGenerator;
