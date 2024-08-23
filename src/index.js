import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { auth, firestore } from "./firebase/firebase"; // 불필요한 import 제거

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
