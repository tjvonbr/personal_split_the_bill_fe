import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import Nav from "./components/Nav";
import FormikLoginForm from "./components/Login";
import SignUp from './components/SignUp';
import UserHome from './components/UserHome';

import BackDrop from './components/BackDrop/BackDrop';
import SideDrawer from "./components/SideDrawer/SideDrawer";

import "./App.css";

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
    <>
    <Nav drawerClickHandler={drawerToggleClickHandler}/>
      <SideDrawer show={state} />
      {backdrop}

      <div>
      
        <div>
          <Route exact path='/signup' component={SignUp} />
          <Route exact path="/" component={FormikLoginForm} />
          <PrivateRoute path='/welcome' component={UserHome} />
        </div>
      </div>
    
    </>
  );
}

export default App;
