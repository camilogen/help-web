import React from "react";
import '../sheets-styles/Nav.css' ;
import MainLogo from '../Imagenes/logo-principal.png' ;
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div className="main-container">
      <div className="help-container">
        <img src={MainLogo} className="logo-principal" alt="imagen" />
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
