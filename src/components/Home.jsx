import React, { Component } from "react";
import "../App.css";
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";
import API_URL from "../api/config";
import axios from "axios";

class Home extends Component {
  state = {
    currentRecipe: null
  };

  onRecipeClick = async id => {
    const { data: currentRecipe } = await axios.get(
      `${API_URL}/v1/recipes/${id}`
    );
    this.setState({
      currentRecipe
    });
  };

  render() {
    const { currentRecipe } = this.state;
    const { recipes, favourites } = this.props.state;

    return (
      <React.Fragment>
        <main className="px4 flex">
          <div style={{ flex: 3 }}>
            <h2 className="h2">Recipes</h2>
            <RecipeList
              onClick={this.onRecipeClick}
              recipes={recipes}
              favourites={favourites}
              onFavourited={this.props.toggleFavourite}
            />
          </div>
          <RecipeDetail
            className="ml4"
            recipe={currentRecipe}
            style={{ flex: 5 }}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
