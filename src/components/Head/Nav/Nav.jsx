import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return <nav className={"nav-bar"}>
  <Link to="/">Your pokemon</Link>
  <Link to="/search">Catch!</Link>
  <Link to="/new">Create a new pokemon</Link> 
</nav>;
};

export default Nav;
