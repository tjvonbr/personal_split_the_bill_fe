import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from 'react-router-dom';

import Table from '../img/table.jpg';
import "./Login.css";

const Login = props => {
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = e => {
    if (e) {
      e.preventDefault();

      axiosWithAuth()
      .post('/login', inputs)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/welcome');
      })
      .catch(err => console.log(err))
    }
  }

  const handleChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
    console.log(inputs);
  }

  return (
    <>
    <img className='table-img' src={Table} alt='table' />

      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active"> Sign In </h2>
          <Link to='/signup'>
          <h2 className="inactive underlineHover">Sign Up </h2>
          </Link>

          <div className="fadeIn first"></div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="username"
              placeholder="login"
              value={inputs.username}
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
              value={inputs.password}
              onChange={handleChange}
            />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>

          <div id="formFooter">
            <Link to='/forgot'><a className="underlineHover">Forgot Password?</a></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
