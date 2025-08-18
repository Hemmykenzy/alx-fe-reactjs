import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((item) => item.id.toString() === id);
        setRecipe(selected);
      })
      .catch((err) => console.error("Error fetching recipe:", err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10 text-gray-600">Loading recipe...</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{recipe.title}</h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          {/* Ingredients Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Ingredients</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Instructions</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          {/* Back Link */}
          <Link
            to="/"
            className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
          >
            ← Back to Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;