import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from 'react-router-dom';

import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Icon, List, Container } from "semantic-ui-react";

import Table from '../img/table.jpg';
import "./SignUp.css";

const SignUp = props => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = e => {
    if (e) {
      e.preventDefault();

      axiosWithAuth()
        .put("/friend", inputs) // change  this later from backend
        .then(res => {
          localStorage.setItem("token", res.data.payload);
        })
        .catch(err => console.log(err));
    }
  };

  const handleChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
    console.log(inputs);
  };

  return (
    <>
    <img className='table-img' src={Table} alt='table' />
   
      <div className="wrapper fadeInDown">
        
        <div id="formContent">
          <Link to='/'>
          <h2 className="inactive underlineHover" >Sign In </h2>
          {/* <span>.  .</span> */}
          </Link>
          <h2 className="active" >Sign Up </h2>

          <div className="fadeIn first"></div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="name"
              placeholder="name"
              value={inputs.first}
              onChange={handleChange}
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="last"
              placeholder="email"
              value={inputs.email}
              onChange={handleChange}
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="******"
              value={inputs.password}
              onChange={handleChange}
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="******"
              value={inputs.password}
              onChange={handleChange}
            />
            
            <input type="submit" className="fadeIn fourth" value="Sign Up" />
          </form>

          <div id="formFooter">
            <a className="underlineHover">All fields are required!</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
