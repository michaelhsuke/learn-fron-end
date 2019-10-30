import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () =>( 
  <div>
    <div>
      <NavLink exact to="/">JsDemoA</NavLink> |&nbsp;
      <NavLink exact to="/jsdemob" activeClassName="active">JsDemoB</NavLink> |&nbsp;
      <NavLink exact to="/jsdemoc" activeClassName="active">JsDemoC</NavLink>
    </div>
  </div>)


export default NavBar