import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="min-h-screen sm:px-8 px-4 py-6 bg-green-400 tttext-white">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
        Recipes
      </h1>

      {/* Grid container for all recipes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 shadow-xlbg-gray-300">
        {recipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="block bg-white rounded-lg shadow hover:shadow-lg overflow-hidden"
          >
            <img
              className="w-full h-40 object-cover"
              src={recipe.image}
              alt={recipe.title}
            />
            <div className="p-4 flex flex-col items-center">
              <h2 className="md:text-xl font-bold mb-2 text-center">
                {recipe.title}
              </h2>
              <p className="text-center text-gray-700">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;