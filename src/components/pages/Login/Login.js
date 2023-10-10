import React from "react"
import Nav from "../../Nav"
import './Login.css';

const Login = () => {
  return (
    <div>
      <Nav />
      <div className="login-container">
      <form className="loginform">
      <input className="input-form" type="text" placeholder="Username"/>
      <input className="input-form" type="password" placeholder="Password"/>
      <button className="log-in" >login</button>
      <p className="message">Not registered? <a href="#">Create an account</a></p>
    </form>
      </div>
    </div>
  )
}

export default Login;