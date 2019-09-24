import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from 'react-router-dom';
import styled from "styled-components";

import { Form, Field as input, withFormik } from 'formik';
import * as Yup from 'yup';

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

          <Form onSubmit={handleSubmit} >
            <input 
            
            
              type="text"
              id="login"
              className="fadeIn second"
              name="username"
              placeholder="login"
              value={inputs.email}
              onChange={handleChange}
              required
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
          </Form>

          <div id="formFooter">
            <Link to='/forgot' className="underlineHover">Forgot Password?</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
// const FormikLoginForm = withFormik({
//   mapPropsToValues({ email, password }) {
//     return {
//       email: email || "",
//       password: password || ""
//     };
//   },
//   validationSchema: Yup.object().shape({
//     email: Yup.string().required("Email is required"),
//     password: Yup.string().required("Password is required")
//   }),
//   handleSubmit(values, { resetForm, setStatus, props }) {
//     axiosWithAuth()
//       .post(`'/login'`, values)
//       .then(res => {
//         // console.log(
//         //   "login success, login Payload =",
//         //   res.data.token,
//         //   res.data.id
//         // );
//         setStatus(res.data.token);
//         resetForm();
//         localStorage.setItem("token", res.data.payload);
//         // localStorage.setItem("id", res.data.id);
//         props.history.push("/welcome");
//       })
//       .catch(err => console.log(err.response));
//   }
// })(Login);

// export default FormikLoginForm;
