import React from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../config/routes';
import './Navigation.scss';

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="links">
        <NavLink to={routeCodes.HOME}>Home</NavLink>
        <NavLink to={routeCodes.HOME}>Home</NavLink>
        <NavLink to={routeCodes.HOME}>Home</NavLink>
        <NavLink to={routeCodes.HOME}>Home</NavLink>
      </div>
    </div>
  );
};

export default Navigation;
