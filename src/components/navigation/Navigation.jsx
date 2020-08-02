import React from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../config/routes';
import { useLocation } from 'react-router-dom'
import './Navigation.scss';
import phone from "../../assets/phone.png"

const Navigation = () => {
  const location = useLocation()
  return (
    <div className="navigation">
      <div className="links">
        <NavLink to={routeCodes.HOME}>Početna</NavLink>
        <NavLink to={routeCodes.SERVICES}>Usluge</NavLink>
        <NavLink to={routeCodes.CONTACT}>Kontakt</NavLink>
      </div>
      {location.pathname.length === 1 && (
        <div className="phone-container">
        <img src={phone} alt="phone"/>
        <a href="tel:+381645755999">064/575-5999</a>
      </div>
      )}
    </div>
  );
};

export default Navigation;
