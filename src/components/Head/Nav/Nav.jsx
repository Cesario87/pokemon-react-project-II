import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return <nav>
  <Link to="/">Home</Link>
  <Link to="/search">Browser</Link>
  <Link to="/new">New pokemon!</Link> 
</nav>;
};

export default Nav;
