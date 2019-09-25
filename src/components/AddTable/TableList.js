import React, { useState } from 'react';
 
import TableNav from './TableNav';



function TableList(params) {
  const [person, setPerson ] = useState({
    persons: []
  })
  function createPerson(newPerson) {

    setPerson({
      persons: [...person, newPerson]
    })
  }
  return(
    <>
      
      
    </>
  )
}


export default TableList;