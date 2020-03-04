import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";

import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
// import { Button, Icon, List, Container } from "semantic-ui-react";

import Table from "../img/table.jpg";
import "./SignUp.css";

function SignUp({ errors, touched, values }) {
  return (
    <>
      <img className="table-img" src={Table} alt="table" />

      <div className="wrapper fadeInDown">
        <div id="formContent">
          <Link to="/">
            <h2 className="inactive underlineHover">Sign In </h2>
            {/* <span>.  .</span> */}
          </Link>
          <h2 className="active">Sign Up </h2>

          <div className="fadeIn first"></div>

          <Form>
            <Field
              type="text"
              id="login"
              className="fadeIn second"
              name="firstName"
              placeholder="First Name"
            />
            <Field
              type="text"
              id="login"
              className="fadeIn second"
              name="lastName"
              placeholder="Last Name"
            />
            <Field
              type="text"
              id="login"
              className="fadeIn third"
              name="username"
              placeholder="Username"
            />{" "}
            {touched.username && errors.username && <p>{errors.username}</p>}
            <Field
              type="text"
              id="password"
              className="fadeIn third"
              name="email"
              placeholder="Email"
            />{" "}
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field
              type="text"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="Password"
            />
            {touched.password && errors.password && <p>{errors.password}</p>}
            <button type="submit" className="fadeIn fourth">
              {" "}
              Join{" "}
            </button>
          </Form>

          <div id="formFooter">
            <Link to='/' className="underlineHover">All fields are required!</Link>
          </div>
        </div>
      </div>
    </>
  );
}

const FormikSignUpForm = withFormik({
  
  
  mapPropsToValues({ firstName, lastName, username, email, password, passwordConfirm }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      username: username || '',
      email: email || "",
      password: password || ""
      // passwordConfirm: passwordConfirm || ''
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("First name requied"),
    lastName: Yup.string().required("Last name required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6)
  }),

  handleSubmit(values, { resetForm, setStatus, props }) {
    // console.log("signup first =", values.firstName);
    // console.log("signup last = ", values.lastName);
    // console.log("signup email =", values.username);

    // console.log("signup email =", values.email);
    // console.log("signup password =", values.password);

    let submitValues = {
      firstName: values.firstName,
      lastName: values.lastName,
      username: values.username,
      email: values.email,
      password: values.password
    };

    axiosWithAuth()
      .post("/register", submitValues)
      .then(res => {
        console.log("signup success", res.data);
        setStatus(res.data.token);
        resetForm();
        localStorage.setItem("token", JSON.stringify(res.data));

        props.history.push("/login");
      })
      .catch(err => console.log(err));
  }
})(SignUp);

export default FormikSignUpForm;
