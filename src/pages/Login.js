import React, { useState } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "../css/Login.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome CSS 포함

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful");
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful");
    } catch (error) {
      alert("Registration failed: " + error.message);
    }
  };

  return (
    <div className="login">
      <div className="div">
        <div className="portfolio-web-login">
          Portfolio web <br />
          Login
        </div>
        <div className="text-wrapper">로그인 방법을 고르세요</div>
        <div className="google">
          <i className="fa-brands fa-google img"></i>
          <div className="text-wrapper-2">구글 로그인</div>
        </div>
        <div className="google-2">
          <div className="text-wrapper-3">회원가입</div>
          <i className="fa-solid fa-arrow-left img"></i>
        </div>
        <div className="rectangle" />
        <div className="rectangle-2" />
        <i className="fa-solid fa-user-large user-alt"></i>
        <div className="text-wrapper-4">이메일</div>
        <i className="fa-solid fa-keyboard keyboard"></i>
        <div className="text-wrapper-5">비밀번호</div>
      </div>
    </div>
  );
}

export default Login;
