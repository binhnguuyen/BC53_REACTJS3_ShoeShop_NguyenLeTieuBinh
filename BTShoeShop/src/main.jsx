import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // bỏ StrictMode ngay đây ko thì khi thêm vào giỏ hàng nó chạy code 2 lần
  // bấm 1 lần nhưng món hàng nhưng bị thêm vào 2
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <App />
);
