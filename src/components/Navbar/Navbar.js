import React from 'react';
import './Navbar.css';
import logo from '../../static/amazon-logo.png';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, Form, FormControl} from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
import {AiOutlineShoppingCart} from "react-icons/ai";
import { useStateValue } from '../StateProvider';

const NavbarHeader = () => {

  const [{cart}, dispatch] = useStateValue();
  console.log('header', cart)
  console.log(dispatch)

  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark" className="navigation">
        <Navbar.Brand href="/">
          <img src={logo} className="header__logo" alt="Amazon logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex col-10 offset-1 col-md-7 offset-md-1">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
            <button className="header__search-icon b-none" id="search-addon"><BsSearch /></button>
          </Form>

          <Nav
            className="ml-auto my-2 my-lg-0 offset-1"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/login" ><span className="header__lineOne">Hello, Sign in </span><span className="header__lineTwo">Account & Lists</span></Nav.Link>
            <Nav.Link href="/"> <span className="header__lineOne">Returns </span><span className="header__lineTwo">   & Orders</span></Nav.Link>
            <Nav.Link href="/checkout" className="me-3">
              <span className="header__lineOne">Cart</span>
              <div className="d-flex">
                <span className="header__cart pe-1">{cart.length} </span>
                <span className="header__lineTwo"> <AiOutlineShoppingCart /></span>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export {NavbarHeader};