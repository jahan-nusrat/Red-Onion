import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Link, useHistory } from "react-router-dom";
import { FormContainer, MainDiv } from "../components/styles/StyleSignUp";

import logo from "../Image/logo2.png";
import bg from "../Image/bg2.png";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { loggedInUser } from "../redux/actions";

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    if (e.target.name === "email") {
      const rex = /\S+@\S+\.\S+/;
      if (!rex.test(e.target.value)) {
        document.getElementById("emailError").innerText = "Enter a valid email";
      } else {
        document.getElementById("emailError").innerText = "";
      }
    }
    if (e.target.name === "password") {
      const rex = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;
      if (!rex.test(e.target.value)) {
        document.getElementById("passError").innerText =
          "Password should contain a number, a special letter and lowercase uppercase letter";
      } else {
        document.getElementById("passError").innerText = "";
      }
    }
    if (e.target.name === "confirmPass") {
      if (e.target.value !== user.password) {
        document.getElementById("confirmError").innerText =
          "Password should be matched";
      } else {
        document.getElementById("confirmError").innerText = "";
      }
    }
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = (e) => {};

  return (
    <MainDiv>
      <img src={bg} alt="" className="img-fluid bg" />
      <FormContainer className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <form onSubmit={handleForm}>
              <Link to="/">
                <img src={logo} alt="banner" />
              </Link>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  onChange={handleInput}
                  value={user.name}
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  onChange={handleInput}
                  value={user.email}
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <p id="emailError">{""}</p>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  onChange={handleInput}
                  value={user.password}
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <p id="passError">{""}</p>
              <div className="form-group">
                <input
                  type="password"
                  name="confirmPass"
                  onChange={handleInput}
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </div>
              <p id="confirmError">{""}</p>
              <button type="submit" className="btn btn-submit">
                Sign Up
              </button>
              <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              <div>
                <p id="error">{""}</p>
              </div>
              <Link to="/login">
                <p>
                  <strong>Already have an account</strong>
                </p>
              </Link>
            </form>
          </div>
        </div>
      </FormContainer>
    </MainDiv>
  );
};

export default SignUp;
