// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home"; // 새로 추가된 Home 컴포넌트

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 추가적인 라우트는 여기에 추가하세요 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
