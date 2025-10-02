import { useState, useEffect } from "react";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">Recipes</h1>

      {/* Grid container for all recipes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
          >
            <img
              className="w-32 h-32 rounded-full mb-4 object-cover"
              src={recipe.image}
              alt={recipe.title}
            />
            <h2 className="text-xl font-bold mb-2 text-center">{recipe.title}</h2>
            <p className="text-center text-gray-700">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;