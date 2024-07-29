import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="div">
        <p className="PORTFOLIO-web">
          <span className="text-wrapper">PORTFOLIO</span>
          <span className="span"> web</span>
        </p>
        <div className="text-wrapper-2">회원가입</div>
        <div className="text-wrapper-3">로그인</div>
        <div className="element">Menu1</div>
        <div className="element-2">Menu2</div>
        <div className="element-3">Menu3</div>
        <div className="element-4">Menu4</div>
      </div>
    </div>
  );
}

export default Header;
