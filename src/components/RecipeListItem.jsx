import React from "react";

const RecipeListItem = ({ recipe, onClick, onFavourited, favourites }) => {
  return (
    <li
      className="py2 border-bottom border-bottom-dashed pointer"
      key={recipe.id}
      onClick={event => onClick(recipe.id)}
    >
      <span
        className="mr1"
        onClick={e => {
          e.stopPropagation();
          onFavourited(recipe.id);
        }}
        role="img"
        aria-label="favourite"
      >
        {favourites.includes(recipe.id) ? "✅" : "🧃"}
      </span>
      <span>{recipe.name}</span>
      <span>{recipe.category}</span>
    </li>
  );
};

export default RecipeListItem;
