import React from "react";
import "../css/Signup.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome CSS 포함

export const Signup = () => {
  return (
    <div className="signup">
      <div className="div">
        <div className="portfolio-web-sign">
          Portfolio web <br />
          Sign up
        </div>
        <i className="fa-solid fa-chalkboard chalkboard-teacher"></i>
        <div className="text-wrapper">이름</div>
        <div className="rectangle" />
        <i className="fa-solid fa-user-large user-alt"></i>
        <div className="text-wrapper-2">이메일</div>
        <div className="rectangle-2" />
        <i className="fa-solid fa-keyboard keyboard"></i>
        <div className="text-wrapper-3">비밀번호</div>
        <div className="rectangle-3" />
        <div className="text-wrapper-4">GOOGLE 계정 회원가입</div>
        <div className="google">
          <i className="fa-brands fa-google google-logo"></i>
          <div className="text-wrapper-5">구글 회원가입</div>
        </div>
        <div className="google-2">
          <div className="text-wrapper-6">로그인창</div>
          <i className="fa-solid fa-arrow-left vector"></i>
        </div>
        <div className="google-3">
          <div className="text-wrapper-7">회원가입</div>
          <i className="fa-solid fa-check img"></i>
        </div>
      </div>
    </div>
  );
};

export default Signup;
