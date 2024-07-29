import React, { useState } from "react";
import "../css/Signup.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { db, auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
      });

      alert("회원가입이 완료되었습니다.");
    } catch (error) {
      console.error("Error signing up: ", error);
      alert("회원가입 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="frame">
      <div className="signup-wrapper">
        <div className="signup">
          <div className="portfolio-web-sign">
            Portfolio web <br />
            Sign up
          </div>
          <i className="fas fa-chalkboard-teacher chalkboard-teacher"></i>
          <div className="text-wrapper">이름</div>
          <input
            type="text"
            className="rectangle"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력하세요"
          />
          <i className="fas fa-user-alt user-alt"></i>
          <div className="text-wrapper-2">이메일</div>
          <input
            type="email"
            className="div"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
          />
          <i className="fas fa-keyboard keyboard"></i>
          <div className="text-wrapper-3">비밀번호</div>
          <input
            type="password"
            className="rectangle-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          />
          <div className="text-wrapper-4">GOOGLE 계정 회원가입</div>
          <div className="google">
            <i className="fab fa-google google-logo"></i>
            <div className="text-wrapper-5">구글 회원가입</div>
          </div>
          <div className="google-2">
            <div className="text-wrapper-6">로그인창</div>
            <i className="fas fa-arrow-left vector"></i>
          </div>
          <div className="google-3" onClick={handleSignup}>
            <div className="text-wrapper-7">회원가입</div>
            <i className="fas fa-user-plus img"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
