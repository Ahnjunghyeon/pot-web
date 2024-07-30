import React, { useState } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "../css/Login.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome CSS 포함

function Login() {
  return (
    <div className="login">
      <div className="div">
        <div className="portfolio-web-login">
          Portfolio web <br />
          Login
        </div>
        <div className="text-wrapper">이메일</div>
        <div className="rectangle" />
        <div className="text-wrapper-2">비밀번호</div>
        <div className="rectangle-2" />
        <div className="view">
          <div className="text-wrapper-3">로그인</div>
          <img className="vector" alt="Vector" src="Vector.jpg" />
        </div>
        <div className="text-wrapper-4">OR</div>
        <img className="line" alt="Line" src="line-1.svg" />
        <img className="img" alt="Line" src="line-2.svg" />
        <div className="view-2">
          <div className="text-wrapper-5">구글로그인</div>
          <img className="img-2" alt="Google logo" src="Googlelogo.jpg" />
        </div>
        <div className="view-3">
          <div className="text-wrapper-6">회원가입</div>
          <img className="img-2" alt="Vector" src="Vector-2.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Login;
