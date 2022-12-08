import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { COUNTER_CONTEXT } from "../../App";
import image from "../../images/images.png";
import logo from "../../images/logo.png";
import "./style.css";

const SignUpThird = () => {
  const [error, setError] = useState("");
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    number,
    setNumber,
    password,
    setpassword,
  } = useContext(COUNTER_CONTEXT);
  let navigate = useNavigate();
  const back = () => {
    navigate("/signUpSecond");
  };
  //signUp
  const signUp = () => {
    if (password.length < 8) {
      setError("password should be atleast 8 character long");
    } else {
      const signUpdata = {
        first_name: firstName,
        last_Name: lastName,
        phone_number: number,
        email: email,
        password: password,
      };

      fetch(`https://test.nexisltd.com/signup`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(signUpdata),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          //console.log(data.sucess);
          if (data.sucess === "user added suceesfully") {
            setFirstName("");
            setLastName("");
            setEmail("");
            setNumber("");
            setpassword("");
            navigate("/login");
          } else {
            setError(data.error);
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
              <input
                placeholder="Write password"
                type="password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <p style={{ fontSize: "smaller" }}>
                Password Shoul be 8 correcter long
              </p>
              <br />
              <div className="d-flex justify-content-between mb-5 ">
                <button
                  className="mt-5 pt-1 pb-1 ps-4 pe-4 rounded back-btn"
                  onClick={back}
                >
                  Back
                </button>
                <button
                  className="mt-5 btn pt-1 pb-1 ps-4 pe-4 rounded"
                  onClick={signUp}
                >
                  Sign Up
                </button>
              </div>
              <p className="warning mt-1 text-center">{error}</p>
              {/* <div className="d-flex justify-content-end alreadyAccount">
                <p>
                  Already Have an Account?{" "}
                  <NavLink to="/login">Login Here!</NavLink>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpThird;
