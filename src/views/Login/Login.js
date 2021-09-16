import React, { useState } from 'react';
import './Login.css';
import logo from '../../static/amazon2.png';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    // Some fancy firebase login shitt
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        if (userCredential) {
          history.push('/');
        }
      })
      .catch((error) => alert(error.message))
  }

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //it successfully created a new user with email
        //and password
        console.log(userCredential);
        if (userCredential) {
          history.push('/');
        }
      })
      .catch((error) => alert(error.message))
  }

  return (
    <article className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="Amazon Logo" />
      </Link>
      <div className="login__container">
        <h1 className="text-start">Sign-In</h1>
        <form>
          <h6 className="fw-bold mt-0 mb-1">Email </h6>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h6 className="fw-bold mt-1 mb-1">Password </h6>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__button" type="submit" onClick={signIn} >Sign In</button>
        </form>
        <p className="login__conditions">By continuing, you agree to Amazon's
          <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088" target="blank" > Conditions of Use</a> and
          <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496" target="blank"> Privacy Notice</a>
        </p>
      </div>
      <p className=" mb-0">New to Amazon?</p>
      <button type="button" className="login__signUpButton pt-0" onClick={signUp} >Create your Amazon account</button>
    </article>
  );
};

export { Login };