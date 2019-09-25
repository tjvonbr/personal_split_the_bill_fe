import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from 'react-router-dom';

import axios from 'axios';

import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Icon, List, Container } from "semantic-ui-react";

import Table from '../img/table.jpg';
import "./SignUp.css";

function SignUp ({ errors, touched, values}) {
  // const [inputs, setInputs] = useState({
  //   name: "",
  //   email: "",
  //   password: ""
  // });

  // const handleSubmit = e => {
  //   if (e) {
  //     e.preventDefault();

  //     axiosWithAuth()
  //       .put("/friend", inputs) // change  this later from backend
  //       .then(res => {
  //         localStorage.setItem("token", res.data.payload);
  //       })
  //       .catch(err => console.log(err));
  //   }
  // };

  // const handleChange = e => {
  //   e.persist();
  //   setInputs(inputs => ({
  //     ...inputs,
  //     [e.target.name]: e.target.value
  //   }));
  //   console.log(inputs);
  // };

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

          <Form >
            <Field
              type="text"
              id="login"
              className="fadeIn second"
              name="firstName"
              placeholder="first name"
            />
            <Field
              type="text"
              id="login"
              className="fadeIn second"
              name="lastName"
              placeholder="last Name"
            />
            <Field 
              type='text'
              id='login'
              className="fadeIn third"
              name="username"
              placeholder="Please enter a user name"
            />
            {' '}
            {touched.username && errors.username && <p>{errors.username}</p>}
            <Field
              type="text"
              id="password"
              className="fadeIn third"
              name="email"
              placeholder="Jane@gmail.com"
            />
            {' '}
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field
              type="text"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="******"
            />
            {touched.password && errors.password && <p>{errors.password}</p>}
            {/* <Field
              type="text"
              id="password"
              className="fadeIn third"
              name="passwordConfirm"
              placeholder="******"
            />
            {touched.passwordConfirm && errors.passwordConfirm && <p>{errors.passwordConfirm}</p>} */}
            <button type="submit" className="fadeIn fourth" >{' '}Join{' '}</button>
          </Form>

          <div id="formFooter">
            <a className="underlineHover">All fields are required!</a>
          </div>
        </div>
      </div>
    </>
  );
};

// export default SignUp;
const FormikSignUpForm = withFormik({
  mapPropsToValues({ firstName, lastName, email, password, passwordConfirm }) {
    return {
      firstName: firstName || '',
      lastName: lastName || '',
      email: email || '',
      password: password || '',
      // passwordConfirm: passwordConfirm || ''
    }
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required('First name requied'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required').min(6),
    // passwordConfirm: Yup().string().required('Please confirm password')
    // .oneOf([Yup.ref('password'), null], "Password don't match")
  }),

  handleSubmit(values, props, resetForm) {
    console.log('signup first =', values.firstName)
    console.log('signup last = ', values.lastName)
    console.log('signup email =', values.username)

    console.log('signup email =', values.email)
    console.log('signup password =', values.password)

    let submitValues = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password
    };

    axios
    .post('https://split-the-bill-bw.herokuapp.com/api/user/register', submitValues)
    .then(res => {
      console.log('signup success', res.data)
      localStorage.setItem('token', JSON.stringify(res.data))
      resetForm();
      props.history.push('/');
    })
    .catch(err => console.log(err))
  }

})(SignUp)

export default FormikSignUpForm;
