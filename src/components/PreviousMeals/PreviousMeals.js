import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './PreviousMeals.css'
import Nav from './../Nav'


// const PreviousMeals = props => (
//     <div className="prevMeals_container">
//     <header className='PrevMeals_header'>
//     </header>
//     <h1>Previous Meals</h1>
//     </div>

// );

const PrevMealsTableHead = () => {
    return (
        <thead>
            <tr>
                <th>Restaurant</th>
                <th>Meal</th>
                <th>Price</th>

            </tr>
        </thead>
    )
}

const PrevMealsTableBody = props => {
    const rows = props.someData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.restaurant}</td>
                <td>{row.meal}</td>
                <td>{row.price}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

export default PreviousMeals
