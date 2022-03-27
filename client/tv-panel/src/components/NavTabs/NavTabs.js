import React from "react";
import "./styles.css";

const NavTabs = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="app-name">Tv-Panel</div>
        <div className="right-nav">
          <div className="nav-text">Current Shows</div>
          <div className="nav-text">Coming Soon</div>
          <div className="nav-text">Sign In</div>
        </div>
      </div>
    </div>
  );
};

export default NavTabs;
