import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ContactCard from '../Contacts/ContactCard';
import 'semantic-ui-css/semantic.min.css';
import TableNav from '../TableNav';

const ContactsList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, [])

  // Fetches all available users from the database
  const fetchUsers = () => {
    axios.get("https://split-the-bill-bw.herokuapp.com/api/user/")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  };

  return (
    <>
      <TableNav />
      {users.map(user => (
        <ContactCard user={user} />
      ))}
    </>
  )
};

export default ContactsList
