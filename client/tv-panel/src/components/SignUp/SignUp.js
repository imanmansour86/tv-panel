import React, { useState } from "react";
import "./styles.css";

const SignUp = () => {
  return (
    <div>
      <div className="header">Create new user </div>
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
          type="text"
          name="email"
          autoComplete="off"
          autoCapitalize="off"
          required={true}
          placeholder="Email"
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
      <div className="footer">
        <a>Create user</a>
      </div>
    </div>
  );
};

export default SignUp;
