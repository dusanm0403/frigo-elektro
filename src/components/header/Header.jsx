import React from "react";
import "./Header.scss";
import Navigation from "../navigation/Navigation";
import washer from "../../assets/washer.svg"
import fridge from "../../assets/kitchen.svg"
import oven from "../../assets/oven.svg"

const Header = () => {
  return (
    <div className="header">
      <div className="header-upper">
        <div className="upper-left">
          <p>FRIGO ELEKTRO ANDREJ</p>
        </div>
        <div className="upper-right">
          <img className="small-img" src={washer} alt="logo" />
          <img className="big-img" src={fridge} alt="logo" />
          <img className="small-img" src={oven} alt="logo" />
        </div>
      </div>
      <div className="header-lower">
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
