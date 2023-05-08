import React from 'react'
import { NavLink } from 'react-router-dom'
import './Loginstyle.css'
const Login = () => {
    return (
        <section className="container1">
        <h4>Hello Again!</h4>
        <h5>Welcome Back You've Been Missed!</h5>
        <h6>To login enter Your email address and password</h6>
        
        <form>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required="" />
          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <input type="password" id="password" name="password" required="" />
            <i className="fa fa-eye password-toggle" />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="remember-me" name="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit1" className="login-btn">Login</button>
        </form>
      </section>
    )
}

export default Login
