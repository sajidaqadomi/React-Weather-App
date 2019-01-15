import React, { Component } from 'react';

import {Link , NavLink} from 'react-router-dom';
const Nav=()=>{
   return(

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand " to="#">WEATHER FINDER</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <NavLink className="nav-link" activeClassName="active" exact to="/">CURRENT<span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"activeClassName="active" to="/weatherhourly">NEXT HOURS</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/weatherdaily">NEXT DAYS</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " activeClassName="active" to="/weathersearch">OTHER CITY</NavLink> 
      </li>
    </ul>
  </div>
</nav>
   
    
  
   )

}
export default Nav;
