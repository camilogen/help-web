import React from "react";
import '../sheets-styles/Nav.css' ;
import MainLogo from "../assets/images/logo.png"
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div className="main-container">
      <div className="help-container">
        <Link to="/">
          <img src={MainLogo} className="logo-principal" alt="logo" />
        </Link>
        <Link to="/about" className="help-button">
          Help Center
        </Link>
      </div>
      <div className="submit-container">
        <Link to="/login" className="login-button">
          Login
        </Link>
      </div>
    </div>
  )
}

export default Nav;
