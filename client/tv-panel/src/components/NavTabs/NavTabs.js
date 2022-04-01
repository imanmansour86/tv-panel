import React from "react";
import "./styles.css";
import { FaUser } from "react-icons/fa";

const NavTabs = () => {
  return (
    <div className="nav ">
      <div className=" nav-container">
        <div className="app-name">tvPanel</div>
        <div className="right-nav">
          <div className="nav-text">Current Shows</div>
          <div className="nav-text">Coming Soon</div>
          <div className="nav-text">
            <button className="sign-in">
              {" "}
              <FaUser /> Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTabs;
