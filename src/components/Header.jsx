import React from "react";
import { NavLink } from "react-router-dom";
import propTypes from "prop-types";

const HeaderLink = ({ children, ...props }) => {
  return (
    <NavLink
      exact
      activeClassName="bg-white"
      className="p1 rounded mx2 black text-decoration-none"
      {...props}
    >
      {children}
    </NavLink>
  );
};

const Header = () => {
  return (
    <header className="flex items-center justify-between px4">
      <h1 className="h1">
        <span role="img" aria-label="emoji">
          🍽️
        </span>{" "}
        My Recipes
      </h1>
      <nav>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/favourites">Favourites</HeaderLink>
      </nav>
    </header>
  );
};

HeaderLink.propTypes = {
  children: propTypes.node
};

export default Header;
