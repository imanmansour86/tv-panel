import React, { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import "./styles.css";

const Modal = ({ closeModal }) => {
  const [showSignUp, setShowSignUp] = useState(false);

  const openSignUpModal = () => {
    setShowSignUp(true);
  };

  return (
    <div className="modal">
      <div className="wrapper">
        <div className="close">
          <FaRegTimesCircle onClick={closeModal} />
        </div>

        {showSignUp ? <SignUp /> : <SignIn />}

        {showSignUp ? (
          <div className="footer"></div>
        ) : (
          <div className="footer">
            <a onClick={openSignUpModal}>Create new user</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
