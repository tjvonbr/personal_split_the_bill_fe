import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Nav from './components/Nav';
import FormikLoginForm from './components/Login';
import FormikSignUpForm from './components/SignUp';
import UserHome from './components/UserHome';

import ContactsList from './components/Contacts/ContactList';


import BackDrop from './components/BackDrop/BackDrop';
import SideDrawer from './components/SideDrawer/SideDrawer';
import MealOrders from './components/MealPayment/MealOrders';

import './App.css';

function App() {
  const [state, setState] = useState(false);
  function drawerToggleClickHandler() {
    state ? setState(false) : setState(true);
  }

  let backdrop;

  if (state) {
    backdrop = <BackDrop click={backDropClickHandler} />;
  }

  function backDropClickHandler() {
    setState(false);
  }
  return (
    <div>
      <Nav drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={state} />
      {backdrop}

      <Switch>
        <Route exact path='/' component={FormikLoginForm} />
        <Route exact path='/signup' component={FormikSignUpForm} />
        <PrivateRoute exact path='/welcome' component={UserHome} />
        <PrivateRoute path='/friends' component={ContactsList} />
        <PrivateRoute exact path='/meal' component={MealOrders} />
      </Switch>
    </div>
  );
}

export default App;
