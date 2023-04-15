import React, { useState } from "react";
import "../styles/style.css";
import REACTLOGO from "../assets/logo.png";
import Login from "../containers/Login";

function Welcome() {
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const handleLoginClick = () => {
    setIsLoginClicked(true);
  };
  return (
    <>
      {!isLoginClicked ? (
        <div className="welcomContainer">
          <img alt="logo-img" id="Logo" src={REACTLOGO} />
          <h1 id="Welcome-text"> Welcome to Lets Chat App!</h1>
          <p>
            <button className="loginButton" onClick={handleLoginClick}>
              Click here to Login!
            </button>
          </p>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Welcome;
