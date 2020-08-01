import React from "react";
import "./Header.scss";
import Navigation from "../navigation/Navigation";

const Header = () => {
  return (
    <div className="header">
      <div className="header-upper">
        <p>LOGO</p>
      </div>
      <div className="header-lower">
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
