import React from "react";
import '../sheets-styles/Nav.css' ;
import MainLogo from '../Imagenes/logo-principal.png' ;
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div className="main-container">
      <img src={MainLogo} className="logo-principal" alt="imagen" />
      <div className="help-container">
        <Link to="/" className="help-button">
          Login
        </Link>
        <Link to="/about" className="help-button">
          About
        </Link>
      </div>
      <div className="submit-container">
        <button className="" />
        <button className="" />
      </div>
    </div>
  )
}

export default Nav;
