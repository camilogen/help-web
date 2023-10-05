import React from "react";
import '../sheets-styles/Nav.css' ;
import MainLogo from '../Imagenes/logo-principal.png' ;

function Nav() {
    return  <div className="main-container">
              <div className="help-container">
                <img 
                  src={MainLogo}
                  className="logo-principal" />
                      <button className="help-button">Help Center</button>
              </div>
              <div className="submit-container">
                <button className="" />
                <button className="" />

              </div>
            </div>
}

export default Nav;
