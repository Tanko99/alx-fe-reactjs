import { useParams } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  // Get the recipe ID from the URL
  const { id } = useParams();
  const recipeId = parseInt(id, 10);

  // Find the recipe in data.json
  const recipe = data.find((r) => r.id === recipeId);

  // Handle invalid or missing recipe
  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl text-red-600 font-semibold">Recipe not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-400 sm:px-8 px-4 py-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Title */}
        <h1 className="md:text-3xl sm:text-lg text-xl font-bold mb-4 text-center">
          {recipe.title}
        </h1>

        {/* Image */}
        {recipe.image && (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        )}

        {/* Summary */}
        <p className="text-gray-700 mb-6">{recipe.summary}</p>

        {/* ✅ Ingredients Section (safe) */}
        <div className="mb-6">
          <h2 className="md:text-2xl sm:text-lg text-xl font-semibold mb-2">
            Ingredients
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {Array.isArray(recipe.ingredients)
              ? recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-600">
                    {ingredient}
                  </li>
                ))
              : recipe.ingredients
              ? <li className="text-gray-600">{recipe.ingredients}</li>
              : <li className="text-gray-500 italic">No ingredients listed.</li>}
          </ul>
        </div>

        {/* ✅ Instructions Section (safe) */}
        <div>
          <h2 className="md:text-2xl sm:text-lg text-xl font-semibold mb-2">
            Instructions
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            {Array.isArray(recipe.instructions)
              ? recipe.instructions.map((instruction, index) => (
                  <li key={index} className="text-gray-600">
                    {instruction}
                  </li>
                ))
              : recipe.instructions
              ? <li className="text-gray-600">{recipe.instructions}</li>
              : <li className="text-gray-500 italic">No instructions provided.</li>}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;