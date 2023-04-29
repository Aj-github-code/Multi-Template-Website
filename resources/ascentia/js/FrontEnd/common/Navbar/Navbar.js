import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";

const Header = () => {

  const [isMobile, setIsMobile] = useState(false)

  // const handleClick = () => setClick(!click)
  // const closeMobileMenu = () => setClick(false)

  return (
    <>
      {/* <nav className="navbar"> */}
      <Navbar bg="light" expand="lg">
        <div className="container">
          <Navbar.Brand href="/">
            <img src='/images/Ascentia_01.png' alt='Ascentia' className="img-fluid" />
          </Navbar.Brand>
          {/* <div className='logo'>
          <img src='/images/Ascentia_01.png' alt='' style={{ width: '40%' }} />
        </div> */}

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About us</Nav.Link>
              <Nav.Link href="/products">Product</Nav.Link>
              <Nav.Link href="/media">Media</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/career">Career</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* <ul className={isMobile ? "nav-links-mobile" : "nav-links a"}
            onClick={() => setIsMobile(false)}>

            <Link to='/' className='home'>
              <li>Home</li>
            </Link>

            <Link to='/about' className="about">
              <li>About us</li>
            </Link>
            <Link to='/products' className="product">
              <li>Product</li>
            </Link>
            <Link to='/media' className="media">
              <li>Media</li>
            </Link>
            <Link to='/contact' className="contact">
              <li>Contact</li>
            </Link>
            <Link to='/career' className="career">
              <li>Career</li>
            </Link>


          </ul>
          <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}

          </button> */}
          {/* </nav> */}
        </div>
      </Navbar>
    </>
  );
}

export default Header;