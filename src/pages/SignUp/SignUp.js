import React, { useContext, useState } from "react";
import "./style.css";
import image from "../../images/images.png";
import logo from "../../images/logo.png";

import { NavLink, useNavigate } from "react-router-dom";
import { COUNTER_CONTEXT } from "../../App";

const SignUp = () => {
  const { firstName, setFirstName, lastName, setLastName } =
    useContext(COUNTER_CONTEXT);
  const [error, setError] = useState("");

  let navigate = useNavigate();
  const next = () => {
    if (!firstName) {
      setError("Fist Name is Required");
    } else if (!lastName) {
      setError("Last Name is Required");
    } else {
      navigate("/signUpSecond");
    }
  };
  return (
    <div className="container signUp">
      <div className="row row-cols-lg-2">
        <div className="mt-5">
          <img src={logo} alt="" />
          <img src={image} alt="" className="img-fluid" />
        </div>

        <div className="d-flex justify-content-center align-items-center card mt-3">
          <div>
            <h3 className="mb-5 text-center">SignUp Form</h3>
            <input
              placeholder="Enter Your First Name"
              type="text"
              required
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <br />
            <br />
            <br />

            <input
              placeholder="Enter Your Last Name"
              type="text"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <p className="warning mt-1">{error}</p>
            <br />
            <div className="d-flex justify-content-center mb-5">
              <button className="mt-5 btn pt-1 pb-1 ps-4 pe-4" onClick={next}>
                Next ->
              </button>
            </div>
            <div className="d-flex justify-content-end alreadyAccount">
              <p>
                Already Have an Account?{" "}
                <NavLink to="/login">Login Here!</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
