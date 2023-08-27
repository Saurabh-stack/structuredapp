import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//import Footer from "./components/shared/Footer.component";
import Header from "./components/shared/Header.component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div className="min-h-screen w-screen overflow-hidden bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-slate-800 text-white">
      <Header />
      <App />
    </div>
  </BrowserRouter>
);
