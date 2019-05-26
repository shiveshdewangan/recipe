import React from "react";
import classNames from "classnames";

const RecipeDetail = ({ style, recipe, className }) => {
  if (!recipe) {
    return (
      <p
        style={style}
        className={classNames("bg-white h3 p2 italic center", className)}
      >
        Please select a recipe to see the details.
      </p>
    );
  }

  const { name, category, calories, image, ingredients, steps } = recipe;

  return (
    <div style={style} className={classNames("p2 bg-white", className)}>
      <h2 className="h2">{name}</h2>
      <img className="fit" src={image} alt={name} />
      <div>
        <span>{category}</span>
        <span>{calories}</span>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map(ingredient => {
          return <li>{ingredient}</li>;
        })}
      </ul>
      <h3>Steps</h3>
      <ol>
        {steps.map(step => (
          <li>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
