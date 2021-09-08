import React from 'react';
import { NavbarHeader } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';

const Layout = (props) => {
  return (
    <>
      <NavbarHeader />
        {props.children}
      <Footer />
    </>
  );
};

export default Layout;