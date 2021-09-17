import React from 'react';
import './Header.css';
import logo from '../../static/amazon-logo.png';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import {AiOutlineShoppingCart} from "react-icons/ai";
import { useStateValue } from '../StateProvider';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

const Header = () => {

  const [{cart, user }] = useStateValue();

  const handleAuthentication = () =>{
    if (user) {
      signOut(auth);
    }
  }

  return (
    <header>
      <Navbar bg="dark" id="header" expand="lg" variant="dark" className="navigation">
        <Link to="/">
          <img src={logo} className="header__logo px-3" alt="Amazon logo" />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" className="mx-2" />
        <Navbar.Collapse id="navbarScroll">
          <form className="d-flex header__form col-10 offset-1 col-md-7 offset-md-1">
            <input
              type="search"
              placeholder="Search..."
              className="col-12 header__input mr-2 px-2"
              aria-label="Search"
            />
            <button className="header__search-icon" id="search-addon"><BsSearch /></button>
          </form>

          <Nav
            className="ml-auto my-2 my-lg-0 offset-1"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to={!user && '/login'} className="header__link" >
              <div onClick={handleAuthentication}>
                <span className="header__lineOne">Hello, {user ? user.email.split('@')[0] : 'Guest'} </span><br/>
                <span className="header__lineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
              </div>
            </Link>
            <Link to="/orders" className="header__link">
              <span className="header__lineOne">Returns </span><br/>
              <span className="header__lineTwo">   & Orders</span>
            </Link>
            <Link to="/checkout" className="header__link me-3">
              <span className="header__lineOne">Cart</span>
              <div className="d-flex">
                <span className="header__cart pe-1">{cart?.length} </span>
                <span className="header__lineTwo">
                  <AiOutlineShoppingCart />
                </span>
              </div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export {Header};