import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUpSecond from "./pages/SignUp/SignUpSecond";
import SignUpThird from "./pages/SignUp/SignUpThird";
import { useState } from "react";
import { createContext } from "react";
import Attandence from "./pages/Attandence/Attandence";
export const COUNTER_CONTEXT = createContext();

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setpassword] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [refressToken, setRefreshToken] = useState("");
  const value = {
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
    accessToken,
    setAccessToken,
    refressToken,
    setRefreshToken,
  };
  return (
    <div>
      <COUNTER_CONTEXT.Provider value={value}>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUpSecond" element={<SignUpSecond />} />
          <Route path="/signUpThird" element={<SignUpThird />} />
          <Route path="/attandence" element={<Attandence />} />
        </Routes>
      </COUNTER_CONTEXT.Provider>
    </div>
  );
}
export default App;
