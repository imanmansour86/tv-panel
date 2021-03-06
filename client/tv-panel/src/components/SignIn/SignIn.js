import React, { useState } from "react";
import "./styles.css";
import { FaRegTimesCircle } from "react-icons/fa";
import Landing from "../Landing/Landing";
import NavTabs from "../NavTabs/NavTabs";
import SignUp from "../SignUp/SignUp";

const SignIn = ({ closeModal }) => {
  return (
    <div>
      <div className="header">Sign in with your account</div>
      <div className="header-sub">Enter credentials below</div>
      <div className="sign-in-inputs">
        <input
          className="sign-input"
          type="text"
          name="username"
          autoComplete="off"
          autoCapitalize="off"
          required={true}
          placeholder="Username"
        ></input>
        <input
          className="sign-input"
          type="password"
          name="password"
          autoComplete="off"
          autoCapitalize="off"
          required={true}
          placeholder="Password"
        ></input>
      </div>
    </div>
  );
};

export default SignIn;
