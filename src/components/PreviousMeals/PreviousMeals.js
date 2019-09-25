import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./PreviousMeals.css"


const PreviousMeals = props => (
    <header className='PrevMeals_header'>
        <div className='navigation'>
            <nav className='toolbar_navigation'>
                <div className='toolbar-toggle-button'>
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className='toolbar_logo'><h1 >SplitTheBill</h1></div>
                <div className='spacer'></div>
                <div className='toolbar-navigation-items'>
                    <Link to="/welcome">Home</Link>
                    <Link to="/">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/contacts"> Contacts </Link>
                    <Link to='/' onClick={logout}>Sign Out</Link>
                </div>
            </nav>
        </div>
    </header>
);



export default PreviousMeals
