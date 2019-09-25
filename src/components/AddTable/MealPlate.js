import React, { useState } from 'react';
import TableNav from './TableNav';

import TableImage from '../../img/table_with_view.jpg';
import './AddTable.css';


function MealPlate() {
  return (
    <>
    <img src={TableImage} className='table-img' alt='table' />
      <TableNav />
    </>
  )
}

export default MealPlate;