import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from "../../utils/Authentication";

import './SideDrawer.css';

const SideDrawer = props => {
  let drawerClasses = "side-drawer";
  
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <div className='toolbar-navigation-items'>
        <Link to="/welcome">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/friends"> Contacts </Link>
        
        <Link to='/' onClick={logout}>Sign Out</Link>
      </div>
    </nav>
  );
}
export default SideDrawer;