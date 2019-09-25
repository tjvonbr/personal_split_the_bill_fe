import React, { useState } from 'react';

const AddPerson = () => {
  const [person, setPerson] = useState({
    name: ''
  });


  function handleSubmit(e) {
    e.preventDefault();

  }

  function handleChange(e) {
    e.persist();
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    })
    console.log(person)
  }
  return (
    <>
      <h1>Add a Person</h1>
      <form onSubmit={handleSubmit}>
        <input
        type='text'
        name='name'
        placeholder='add a person'
        value={person.name}
        onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </>
  )
}

export default AddPerson;