import React from 'react';

import TableImage from '../../img/inside-restaurant.jpg';
import './AddTable.css';

import MealOrders from '../MealPayment/MealOrders';


function MealPlate() {
  return (
    <>
    <img src={TableImage} className='table-img' alt='table' />
      <MealOrders />
    </>
  )
}

export default MealPlate;