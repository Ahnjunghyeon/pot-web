import React from "react";
import ReactDOM from "react-dom/client"; // 'react-dom/client'에서 'createRoot'를 가져옵니다.
import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome CSS 포함

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
