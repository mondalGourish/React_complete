import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-cyan-900 flex items-center justify-between px-8 py-4">
      <h2 className="text-xl font-bold">Gourish's page</h2>
      <div className="flex gap-10">
        <Link className="text-lg font-medium" to='/'>Home</Link>
        <Link className="text-lg font-medium" to='/about'>About</Link>
        <Link className="text-lg font-medium" to='/contact'>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
