import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer pb-4 ">
      <a href="#header" className="footer__back ">Back to Top</a>
      <section className="row text-center text-md-start offset-md-1">
        <ul className="col-12 col-md">
          <p className="col mb-1"><span className="fw-bold">Get to Know Us</span></p>
          <li className="footer__link">
            <a href="/" className="col ">Careers</a>
          </li>
          <li className="footer__link">
            <a href="/" className="col ">Blog</a>
          </li>
          <li className="footer__link">
            <a href="/" className="col ">About Amazon</a>
          </li>
          <li className="footer__link">
            <a href="/" className="col ">Investor Relations</a>
          </li>
          <li className="footer__link">
            <a href="/" className="col ">Amazon Devices</a>
          </li>
        </ul>
        <ul className="col-12 col-md">
          <p className="col mb-1"><span className="fw-bold">Make Money with Us</span></p>
          <li className="footer__link">
            <a href="/" className="col ">Sell products on Amazon</a>
          </li>
          <li className="footer__link">
            <a href="/" className="col ">Sell on Amazon Business</a>
          </li>
          <li className="footer__link">
            <a href="/" className="col ">Sell apps on Amazon</a>
          </li>
          <li className="footer__link">
            <a href="/" className="col ">Become an Affiliate</a>
          </li>
          <li className="footer__link">
            <a href="/" className="col ">Advertise Your Products</a>
          </li>
          <li className="footer__link">
            <a href="/" className="col ">Self-Publish with Us</a>
          </li>
          <li className="footer__link">
            <a href="/" className="col ">Host an Amazon Hub</a>
          </li>
        </ul>
        <ul className="col-12 col-md">
          <p className="col mb-1"><span className="fw-bold">Amazon Payment Products</span></p>
          <li className="footer__link">
            <a href="/" className="col ">Amazon Business Card</a>
          </li>
          <li className="footer__link">
            <a href="/" className="col ">Shop with Points</a>
          </li>
          <li className="footer__link">
            <a href="/" className="col ">Reload Your Balance</a>
          </li>
          <li className="footer__link">
            <a href="/" className="col ">Amazon Currency Converter</a>
          </li>
        </ul>
        <ul className="col-12 col-md">
          <p className="col mb-1"><span className="fw-bold">Let Us Help You</span></p>
          <li className="footer__link">
            <a href="/" className="col ">Amazon and COVID-19</a>
          </li>
          <li className="footer__link">
            <a href="/" className="col ">Your Account</a>
          </li>
          <li className="footer__link">
            <a href="/" className="col ">Your Orders</a>
          </li>
          <li className="footer__link">
            <a href="/" className="col ">Shipping Rates & Policies</a>
          </li>
          <li className="footer__link">
            <a href="/" className="col ">Returns & Replacements</a>
          </li>
          <li className="footer__link">
            <a href="/" className="col ">Manage Your Content and Devices</a>
          </li>
          <li className="footer__link">
            <a href="/" className="col ">Amazon Assistant</a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export { Footer };
