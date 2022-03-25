import React from "react";
import "./styles.css";

const NavTabs = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="app-name">Tv-Panel</div>
        <div className="right-nav">
          <div>Current Shows</div>
          <div>Coming Soon</div>
          <div>About</div>
        </div>
      </div>
    </div>
  );
};

export default NavTabs;
