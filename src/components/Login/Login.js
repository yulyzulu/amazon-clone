import React from 'react';
import './Login.css';
import logo from '../../static/amazon2.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="Amazon Logo" />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          {/* <label className="fw-bold">Email</label> */}
          <h6 className="fw-bold mt-0 mb-1">Email </h6>
          <input type="email" />
          {/* <label>Password</label> */}
          <h6 className="fw-bold mt-1 mb-1">Password </h6>
          <input type="password" />
          <button className="login__button" type="submit">Sign In</button>
        </form>
        <p>By continuing, you agree to Amazon's
          <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088" target="blank" > Conditions of Use</a> and
          <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496" target="blank"> Privacy Notice</a>
        </p>
      </div>
      <p className="pt-3">New to Amazon?</p>
      <button type="button" className="login__signUpButton ">Create your Amazon account</button>
    </section>
  );
};

export { Login };