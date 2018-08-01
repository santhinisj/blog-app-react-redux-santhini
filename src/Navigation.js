import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
   return (
       <div className="nav-bar">
           <NavLink to="/">New</NavLink>
           {' | '}
           <NavLink to="/blog">Details</NavLink>
           {' | '}
           <NavLink to="/blogs">Blogs</NavLink>
       </div>
   )
}

export default Navigation;