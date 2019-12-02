import React from 'react';
import { col, Row, Container } from 'react-bootstrap';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import "./Header.scss";
import image from "../Images/mylogo.png";
import { Link } from 'react-router-dom'; 

const Header = ()=>{
    return (   
        <Navbar bg="light" expand="md">
        <Navbar.Brand style={{backgroundImage: `url(${image}` }} href="#home">Liberty Trust Group</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Link to="/HowItWorks">  Navigate to page 2 </Link>
            <Nav.Link href="HowItWorks">How it works</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            <Nav.Link href="#link">Why Us</Nav.Link>
            <Nav.Link href="#link">Testimonials</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <Nav.Link href="#link">Ph: 800-288-8500</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    ); 
}
export default Header; 