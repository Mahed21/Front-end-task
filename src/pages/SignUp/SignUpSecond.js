import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { COUNTER_CONTEXT } from "../../App";
import image from "../../images/images.png";
import logo from "../../images/logo.png";

const SignUpSecond = () => {
  const { setNumber, setEmail, email, number } = useContext(COUNTER_CONTEXT);
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const back = () => {
    navigate("/");
  };
  const next = () => {
    console.log(email, number);
    if (!email) {
      setError("Email is Required");
    } else if (!number) {
      setError("Number is Required");
    } else {
      navigate("/signUpThird");
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
              <h3 className="mb-5 text-center ">SignUp Form</h3>
              <input className="me-1 additinal-input" value="+880" readOnly />
              <input
                placeholder="1xxxxxxxxx"
                className="additinal-input1"
                type="text"
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
              <br />
              <br />
              <br />
              <input
                placeholder="Write Email Address"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <p className="warning mt-1">{error}</p>
              <br />
              <div className="d-flex justify-content-between mb-5">
                <button
                  className="mt-5 pt-1 pb-1 ps-4 pe-4 rounded back-btn"
                  onClick={back}
                >
                  Back
                </button>
                <button
                  className="mt-5 btn pt-1 pb-1 ps-4 pe-4 rounded"
                  onClick={next}
                >
                  Next ->
                </button>
              </div>
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

export default SignUpSecond;
