import { useState } from "react";
import REACTLOGO from "../assets/logo.png";
import Users from "../data/users";
import HomePage from "../components/HomePage";

const Login = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [pass, setPass] = useState("");
  const [userId, setUserId] = useState(0);

  const handleEmailChange = (e) => {
    setEmailAddress(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (emailAddress.length > 0 && pass.length > 0) {
      const selectedUser = Users.filter(
        (u) => u.emailAddress === emailAddress && u.password === pass
      );
      if (selectedUser.length > 0) {
        setUserId(selectedUser[0].userId);
      } else {
        alert("Invalid email or password");
      }
    }
  };

  return (
    <>
      {userId === 0 ? (
        <div className="loginContainer">
          <img className="appLogo" src={REACTLOGO} />
          <form className="loginForm">
            <input
              type="email"
              className="email"
              id="emailAddress"
              placeholder="Enter your E-mail"
              onChange={handleEmailChange}
              value={emailAddress}
            />
            <input
              type="password"
              id="loginPassword"
              className="pass"
              onChange={handlePassChange}
              value={pass}
              placeholder="Enter your Password"
            />

            <button
              id="loginButton"
              className="loginButton"
              onClick={handleLogin}
            >
              Log in
            </button>
          </form>
        </div>
      ) : (
        <HomePage userId={userId} />
      )}
    </>
  );
};

export default Login;
