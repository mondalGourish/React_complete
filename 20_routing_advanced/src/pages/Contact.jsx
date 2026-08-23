import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    // nested routing page
    <div >
      <div className="flex justify-center py-4 gap-10">
        <Link className="text-xl font-semibold"   to='/contact/men'>Men</Link>
      <Link className="text-xl font-semibold"   to='/contact/women'>Women</Link>
      <Link className="text-xl font-semibold"   to='/contact/kid'>Kid</Link>
      </div>
      <Outlet/> 
      {/* important for nested routing */}
    </div>
  );
};

export default Contact;
