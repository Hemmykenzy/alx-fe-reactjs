import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Load mock data when component mounts
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          🍲 Recipe Sharing Platform
        </h1>

        {/* Grid Layout */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  {recipe.title}
                </h2>
                <p className="text-gray-600 mb-4">{recipe.summary}</p>
                <a
                  href={`/recipe/${recipe.id}`}
                  className="text-blue-500 font-medium hover:underline"
                >
              <Link
                to={`/recipe/${recipe.id}`}
                className="inline-block px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition"
              >
                View Recipe →
              </Link>
                  View Recipe →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;