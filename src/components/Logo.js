import React from "react";
import "../App.css";
import logo from "../images/logo.png";

export default function Logo() {
  return (
    <div className="logo-container">
      <img className="logo" src={logo} />
    </div>
  );
}
