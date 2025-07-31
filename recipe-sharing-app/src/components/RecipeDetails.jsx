import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import FavoriteToggleButton from './FavoriteToggleButton';
import { useState } from 'react';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );
  const [editing, setEditing] = useState(false);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      {editing ? (
        <EditRecipeForm recipe={recipe} onClose={() => setEditing(false)} />
      ) : (
        <>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <DeleteRecipeButton id={recipe.id} />
          <FavoriteToggleButton recipeId={recipe.id} />
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
