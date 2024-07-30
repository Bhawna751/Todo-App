import React from "react";
import logo from "../assets/logo.png";

function User() {
  return (
    <div className="User">
      <div className="logo">
        <img src={logo} alt="logo" />
        <div className="info">
          <p>Todo App</p>
          <a href="#">Logout!</a>
        </div>
      </div>
    </div>
  );
}

export default User;
