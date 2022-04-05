import React, { useState } from "react";
import "./styles.css";
import { FaUser } from "react-icons/fa";
import SignIn from "../SignIn/SignIn";
import Modal from "../Modal/Modal";
const NavTabs = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="nav ">
      {showModal && <Modal closeModal={closeModal} />}
      <div className=" nav-container">
        <div className="app-name">tvPanel</div>
        <div className="right-nav">
          <div className="nav-text">Current Shows</div>
          <div className="nav-text">Coming Soon</div>
          <div className="nav-text">
            <button className="sign-in" onClick={openModal}>
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
