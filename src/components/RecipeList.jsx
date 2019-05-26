import React from "react";
import RecipeListItem from "./RecipeListItem";

const RecipeList = ({ style, recipes, onClick, onFavourited, favourites }) => {
  return (
    <ul style={style} className="list-reset">
      {recipes.map(recipe => (
        <RecipeListItem
          recipe={recipe}
          onClick={onClick}
          favourites={favourites}
          onFavourited={onFavourited}
        />
      ))}
    </ul>
  );
};

export default RecipeList;
