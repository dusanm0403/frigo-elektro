import React from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../config/routes';
import './Navigation.scss';

const Navigation = () => {
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
