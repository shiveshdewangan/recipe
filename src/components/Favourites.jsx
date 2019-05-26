import React from "react";
import RecipeList from "./RecipeList";

const Favourites = ({ state, toggleFavourite, onClick }) => {
  return (
    <div className="px4">
      <h2 className="h2">Favourites</h2>
      <RecipeList
        recipes={state.recipes.filter(r => state.favourites.includes(r.id))}
        favourites={state.favourites}
        onFavourited={toggleFavourite}
        onClick={onClick}
      />
    </div>
  );
};

export default Favourites;
