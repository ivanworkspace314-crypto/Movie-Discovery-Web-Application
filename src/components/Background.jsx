import React from "react";
import heroBg from "../assets/images/hero-bg.png";

const Background = ({ children }) => {
  return (
    <div
      className="h-[50vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {children}
    </div>
  );
};

export default Background;
