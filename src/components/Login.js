import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import axios from "axios";

// as input
import { Form, Field , withFormik } from "formik";
import * as Yup from "yup";

import Table from "../img/table.jpg";
import "./Login.css";

function Login({ errors, touched }) {
  return (
    <>
      <img className="table-img" src={Table} alt="table" />

      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active"> Sign In </h2>
          <Link to="/signup">
            <h2 className="inactive underlineHover">Sign Up </h2>
          </Link>

          <div className="fadeIn first"></div>

          <Form >
            {touched.username  && errors.username && <p> {errors.username} </p>}
            <Field
              type="text"
              id="login"
              className="fadeIn second"
              name="username"
              placeholder="user name"
            />
            <Field
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
            />
            {touched.password && errors.password && <p> {errors.password} </p>}
            <button type="submit" className="fadeIn fourth"  >{' '}Login{' '}</button>
          </Form>

          <div id="formFooter">
            <Link to="/forgot" className="underlineHover">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

// export default Login;
const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
  }),
  handleSubmit(values, { resetForm, setStatus, props }) {
    let submitValues = {
      username: values.username,
      password: values.password
    }
 console.log(values.username, values.password)
    axiosWithAuth()
      .post('http://localhost:5000/api/login', submitValues)
      .then(res => {
        console.log(
          "login success, login Payload =",
          res.data.token,
          res.data.id
        );
        setStatus(res.data.token);
        resetForm();
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        props.history.push("/welcome");
      })
      .catch(err => console.log(err.response));
  }
})(Login);

export default FormikLoginForm;
