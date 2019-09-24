import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const PreviousMeals = props => (
    <header className='PrevMeals_header'>
        <div className='navigation'>
            <nav>
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
