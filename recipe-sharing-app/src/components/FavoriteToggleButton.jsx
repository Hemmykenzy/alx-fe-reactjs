import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favoriteIds = useRecipeStore((state) => state.favorites);

  const favorites = favoriteIds
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  if (favorites.length === 0) return <p>You haven’t favorited any recipes yet.</p>;

  return (
    <div>
      <h2>⭐ My Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id}>
          <h3><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link></h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
