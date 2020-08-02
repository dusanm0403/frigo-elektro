import React from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../config/routes';
import { useLocation } from 'react-router-dom'
import './Navigation.scss';

const Navigation = () => {
  // const location = useLocation()
  return (
    <div className="navigation">
      <div className="links">
        <NavLink to={routeCodes.HOME}>Početna</NavLink>
        <NavLink to={routeCodes.SERVICES}>Usluge</NavLink>
        <NavLink to={routeCodes.CONTACT}>Kontakt</NavLink>
      </div>
      
    </div>
  );
};

export default Navigation;
