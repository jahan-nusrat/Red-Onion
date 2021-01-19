import React, { useState } from "react";
import { FormContainer, MainDiv } from "../../components/styles/StyleSignUp";

import bg from "../../Image/bg2.png";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useDispatch } from "react-redux";

import ActionAuth from "../../redux/ducks/auth";

const LogIn = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();

    dispatch(ActionAuth.signInRequest(user.email, user.password));
  };

  return (
    <MainDiv
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img src={bg} alt="" className="img-fluid bg" />
      <FormContainer className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div style={{ marginBottom: "40px", textAlign: "center" }}>
              <h1>Login</h1>
            </div>

            <form onSubmit={handleForm}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={handleInput}
                  value={user.email}
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  onChange={handleInput}
                  value={user.password}
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-submit">
                Login
              </button>
              <div className="error-catch text-center">
                <p id="error" style={{ color: "red" }}>
                  {""}
                </p>
              </div>
            </form>

            <div className="social-media d-flex justify-content-center">
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
            </div>
          </div>
        </div>
      </FormContainer>
    </MainDiv>
  );
};

export default LogIn;
