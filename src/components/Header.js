import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

function Header() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleSignup = () => setShowSignup(!showSignup);
  const toggleLogin = () => setShowLogin(!showLogin);

  return (
    <div className="header">
      <div className="div">
        <p className="PORTFOLIO-web">
          <span className="text-wrapper">PORTFOLIO</span>
          <span className="span"> web</span>
        </p>
        <div className="text-wrapper-2" onClick={toggleSignup}>
          회원가입
        </div>
        <div className="text-wrapper-3" onClick={toggleLogin}>
          로그인
        </div>
        <div className="element">Menu1</div>
        <div className="element-2">Menu2</div>
        <div className="element-3">Menu3</div>
        <div className="element-4">Menu4</div>
      </div>
      {showSignup && (
        <div className="modal-overlay" onClick={toggleSignup}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleSignup}>
              &times;
            </button>
            <Signup />
          </div>
        </div>
      )}
      {showLogin && (
        <div className="modal-overlay" onClick={toggleLogin}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleLogin}>
              &times;
            </button>
            <Login />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
