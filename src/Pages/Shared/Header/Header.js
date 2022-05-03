import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useAuthState} from "react-firebase-hooks/auth"
import auth from '../../../firebase.init';
import logo from '../../../Images/logo/logo.png'

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
      <>
        <Navbar collapseOnSelect expand="lg" sticky='top' bg='light' variant="light">
                <Container className='header-text'>
                    <Navbar.Brand as={Link} to="/">
                            <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#gallery">Gallery</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="checkout">Checkout</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      
      </>
    );
};

export default Header;