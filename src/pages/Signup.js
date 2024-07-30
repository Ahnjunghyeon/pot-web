import React, { useState } from "react";
import "../css/Signup.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { db, auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password || !name) {
        alert("모든 필드를 입력해주세요.");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      console.log("User created successfully:", user);

      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
      });

      alert("회원가입이 완료되었습니다.");
      navigate("/login"); // 로그인 창으로 리디렉션
    } catch (error) {
      console.error("Error signing up: ", error);
      alert("회원가입 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="signup">
      <div className="div">
        <div className="portfolio-web-sign">
          Portfolio web <br />
          Sign up
        </div>
        <div className="text-wrapper">이름</div>
        <input
          type="text"
          className="rectangle"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력하세요"
        />
        <div className="text-wrapper-2">이메일</div>
        <input
          type="email"
          className="rectangle-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력하세요"
        />
        <div className="text-wrapper-3">비밀번호</div>
        <input
          type="password"
          className="rectangle-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
        />
        <div className="google-2" onClick={handleSignup}>
          <div className="text-wrapper-5">회원가입</div>
          <img className="img" alt="Vector" src="Vector.jpg" />
        </div>
        <div className="text-wrapper-6">OR</div>
        <img className="line" alt="Line" src="line-3.svg" />
        <img className="line-2" alt="Line" src="line-4.svg" />
        <div className="google-3">
          <img className="google-logo" alt="Google logo" src="googlelogo.jpg" />
          <div className="text-wrapper-7">구글 로그인</div>
        </div>
        <div className="google">
          <img className="vector" alt="Vector" src="Vector-1.jpg" />
          <div className="text-wrapper-4">로그인 창</div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
