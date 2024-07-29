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
    <div className="loginpage">
      <div className="login-wrapper">
        <div className="login">
          <div className="portfolio-web-login">
            Portfolio web <br />
            Login
          </div>
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="text-wrapper-3">이메일</div>
          <i className="fas fa-keyboard keyboard"></i>
          <div className="text-wrapper-4">비밀번호</div>
          <div className="text-wrapper">로그인 방법을 고르세요</div>
          <div className="google">
            <i className="fab fa-google img"></i>
            <div className="div">구글 로그인</div>
          </div>
          <div className="google-2">
            <div className="text-wrapper-2">회원가입</div>
            <i className="fas fa-arrow-left img"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
