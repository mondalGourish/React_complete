import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <h3>Gourish Navar</h3>
      <div className="link">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>

        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
