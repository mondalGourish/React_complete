import React from "react";
import "remixicon/fonts/remixicon.css";
import Hero from "./Hero";
import Arrow from "./Arrow";

const LeftScetion = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3">
      <Hero/>
      <Arrow/>
    </div>
  );
};

export default LeftScetion;
