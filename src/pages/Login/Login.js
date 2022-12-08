import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { COUNTER_CONTEXT } from "../../App";
import image from "../../images/images.png";
import logo from "../../images/logo.png";

const Login = () => {
  let navigate = useNavigate();
  const { accessToken, setAccessToken, refressToken, setRefreshToken } =
    useContext(COUNTER_CONTEXT);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const loginFunction = () => {
    if (!loginEmail) {
      setError("Email is Required");
    } else if (!loginPassword) {
      setError("Password is Required");
    } else {
      const Logindata = {
        email: loginEmail,
        password: loginPassword,
      };
      fetch(`https://test.nexisltd.com/login `, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(Logindata),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.access_token) {
            setAccessToken("data.access_token");
            setRefreshToken("data.refresh_token");
            navigate("/attandence");
          } else {
            setError("Fail to login if you dont have account register first");
          }
        });
    }
  };
  return (
    <div>
      <div className="container signUp">
        <div className="row row-cols-lg-2">
          <div className="mt-5">
            <img src={logo} alt="" />
            <img src={image} alt="" className="img-fluid" />
          </div>

          <div className="d-flex justify-content-center align-items-center card mt-3">
            <div>
              <h3 className="mb-5 text-center">Login Form</h3>
              <input
                placeholder="Enter email address"
                type="email"
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <br />
              <br />
              <br />

              <input
                placeholder="Enter password"
                type="password"
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <p style={{ fontSize: "smaller" }}>
                Password Shoul be 8 correcter long
              </p>
              <br />
              <div className="d-flex justify-content-center ">
                <button
                  className="mt-5 btn pt-1 pb-1 ps-4 pe-4"
                  onClick={loginFunction}
                >
                  LogIn
                </button>
              </div>
              <p className="warning mt-1 text-center">{error}</p>
              <div className="d-flex justify-content-end alreadyAccount mt-5">
                <p>
                  Already Have an Account?{" "}
                  <NavLink to="/">Sign Up here!</NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
