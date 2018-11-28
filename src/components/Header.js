import React from 'react';
import {NavLink} from 'react-router-dom';

const Header=()=>(
    <div>
  <h1>Expensify</h1>  
  <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink><br/>
  <NavLink to="/create" activeClassName="is-active"> Create Page</NavLink><br/>
  <NavLink to="/edit" activeClassName="is-active">Edit Page</NavLink><br/>
  <NavLink to="/help" activeClassName="is-active">Help Page</NavLink> 
      </div>
);

export default Header;