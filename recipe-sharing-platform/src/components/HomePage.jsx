import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="min-h-screen sm:px-8 px-4 py-6 bg-green-500">
      <h1 className="md:text-3xl sm::text-2xl text-xl font-bold text-center mb-6">Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 shadow-lg rounded-lg bg-gray-600 gap-6">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}   
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition block"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-600 mt-2">{recipe.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;