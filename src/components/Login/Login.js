/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };
  const [formvalues, setFormvalues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const validateLogin = async () => {
    const { data } = await axios.post(
      "https://jobs-api.squareboat.info/api/v1/auth/login",
      formvalues
    );
    if (data.length !== null) {
      localStorage.setItem("profile", JSON.stringify(data.data));
      localStorage.setItem("login", JSON.stringify("true"));
      navigate("/jobs");
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      validateLogin();
    }
  }, [formErrors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formvalues));
    setIsSubmit(true);
  };

  const validateForm = (values) => {
    const errors = {};
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailRegex.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (formvalues.password !== "squareboat") {
      errors.password = "Incorrect email or password";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  };

  return (
    <div className="mylogincontainer">
      <div className="mylogin">
        <form className="myform" onSubmit={handleSubmit}>
          <p style={{ fontSize: "1.5rem" }}>Login</p>
          <label htmlFor="email">Email Address</label>
          <input
            className={Object.values(formErrors).length > 0 ? "iserror" : ""}
            type="text"
            name="email"
            onChange={(e) => handleChange(e)}
            value={formvalues.email}
          />
          <div
            style={
              formErrors.email
                ? {
                    color: "red",
                    display: "flex",
                    justifyContent: "end",
                    visibility: "visible",
                  }
                : {
                    color: "red",
                    display: "flex",
                    justifyContent: "end",
                    visibility: "hidden",
                  }
            }
          >
            {formErrors?.email}
          </div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className={
              Object.values(formErrors).length > 0
                ? formErrors.password && "iserror"
                : ""
            }
            onChange={(e) => handleChange(e)}
            value={formvalues.password}
          />
          <div
            style={
              formErrors.password
                ? {
                    color: "red",
                    display: "flex",
                    justifyContent: "end",
                    visibility: "visible",
                  }
                : {
                    color: "red",
                    display: "flex",
                    justifyContent: "end",
                    visibility: "hidden",
                  }
            }
          >
            {formErrors?.password}
          </div>
          <button className="loginbtn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
