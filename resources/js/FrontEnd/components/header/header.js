import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import {Nav,  NavDropdown,Navbar } from 'react-bootstrap';
import './header.css';
import logo from '../../assets/images/logo-tvs.png';

class Header extends Component {

    render() {
        const Url = process.env.MIX_URL;
        return (
            <Navbar bg="white" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={this.props.logo !== ''?
                        Url+'public/upload/setup/'+this.props.logo
                        :logo} className="logo img-fluid" alt="TVS Bike" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="nav-menu">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/service">Service</Nav.Link>
                            <NavDropdown title="Product" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/product/Accessories">Accessories</NavDropdown.Item>
                                <NavDropdown.Item href="/product/Oil & Lubricants">
                                Oil & Lubricants
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Vehicles" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/vehicle/new">New Bike</NavDropdown.Item>
                                <NavDropdown.Item href="/vehicle/used">
                                Used Bike
                                </NavDropdown.Item>
                            </NavDropdown>
                            
                            {/* <Nav.Link href="/vehicle"></Nav.Link> */}
                            {/* <Nav.Link href="/gallery">Gallery</Nav.Link> */}
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;