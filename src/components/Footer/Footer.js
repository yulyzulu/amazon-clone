import React from 'react';
// import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer pb-4 ">
      <a href="/" className="footer__back ">Back to Top</a>
      <div className="row text-center text-md-start offset-md-1">
        <div className="col-12 col-md">
          <p className="col mb-1"><span className="fw-bold">Get to Know Us</span></p>
          <div className="footer__link">
            <a href="/" className="col ">Careers</a>
          </div>
          <div className="footer__link">
            <a href="/" className="col ">Blog</a>
          </div>
          <div className="footer__link">
            <a href="/" className="col ">About Amazon</a>
          </div>
          <div className="footer__link">
            <a href="/" className="col ">Investor Relations</a>
          </div>
          <div className="footer__link">
            <a href="/" className="col ">Amazon Devices</a>
          </div>
        </div>
        <div className="col-12 col-md">
          <p className="col mb-1"><span className="fw-bold">Make Money with Us</span></p>
          <div className="footer__link">
            <a href="/" className="col ">Sell products on Amazon</a>
          </div>
          <div className="footer__link">
            <a href="/" className="col ">Sell on Amazon Business</a>
          </div>
          <div className="footer__link">
            <a href="/" className="col ">Sell apps on Amazon</a>
          </div>
          <div className="footer__link">
            <a href="/" className="col ">Become an Affiliate</a>
          </div>
          <div className="footer__link">
            <a href="/" className="col ">Advertise Your Products</a>
          </div>
          <div className="footer__link">
            <a href="/" className="col ">Self-Publish with Us</a>
          </div>
          <div className="footer__link">
            <a href="/" className="col ">Host an Amazon Hub</a>
          </div>
        </div>
        <div className="col-12 col-md">
          <p className="col mb-1"><span className="fw-bold">Amazon Payment Products</span></p>
          <div className="footer__link">
            <a href="/" className="col ">Amazon Business Card</a>
          </div>
          <div className="footer__link">
            <a href="/" className="col ">Shop with Points</a>
          </div>
          <div className="footer__link">
            <a href="/" className="col ">Reload Your Balance</a>
          </div>
          <div className="footer__link">
            <a href="/" className="col ">Amazon Currency Converter</a>
          </div>
        </div>
        <div className="col-12 col-md">
          <p className="col mb-1"><span className="fw-bold">Let Us Help You</span></p>
          <div className="footer__link">
            <a href="/" className="col ">Amazon and COVID-19</a>
          </div>
          <div className="footer__link">
            <a href="/" className="col ">Your Account</a>
          </div>
          <div className="footer__link">
            <a href="/" className="col ">Your Orders</a>
          </div>
          <div className="footer__link">
            <a href="/" className="col ">Shipping Rates & Policies</a>
          </div>
          <div className="footer__link">
            <a href="/" className="col ">Returns & Replacements</a>
          </div>
          <div className="footer__link">
            <a href="/" className="col ">Manage Your Content and Devices</a>
          </div>
          <div className="footer__link">
            <a href="/" className="col ">Amazon Assistant</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
