import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Favourites from "./Favourites";
import Header from "./Header";
import NotFound from "./NotFound";
import axios from "axios";
import API_URL from "../api/config";

class App extends Component {
  state = { recipes: [], favourites: [] };

  componentDidMount = async () => {
    const { data: recipes } = await axios.get(`${API_URL}/v1/recipes`);
    this.setState({
      recipes
    });
  };

  toggleFavourite = id => {
    this.setState(({ favourites, ...state }) => {
      const idx = favourites.indexOf(id);

      if (idx !== -1) {
        debugger;
        return {
          ...state,
          favourites: favourites.filter(f => f !== id)
        };
      }
      return {
        ...state,
        favourites: [...favourites, id]
      };
    });
  };

  handleClick = event => {
    return;
  };

  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />
          <Switch>
            <Redirect from="/home" to="/" />
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  state={this.state}
                  toggleFavourite={this.toggleFavourite}
                />
              )}
            />
            <Route
              path="/favourites"
              render={() => (
                <Favourites
                  state={this.state}
                  toggleFavourite={this.toggleFavourite}
                  onClick={event => this.handleClick(event)}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
