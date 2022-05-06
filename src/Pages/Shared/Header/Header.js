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
        <Navbar collapseOnSelect expand="lg" sticky='top' bg='white' variant="light shadow-sm">
                <Container className='d-flex '>
                    <Navbar.Brand as={Link} to="/">
                        <Nav.Link href="home">
                            <img src={logo} alt="" />
                        </Nav.Link>                          
                   </Navbar.Brand>
                   
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto fst-italic fw-bold">
                            <Nav.Link href="home#inventory">Inventory</Nav.Link>
                            <Nav.Link  href="home#offer">Offer</Nav.Link>
                            <Nav.Link  href="home#client">Client</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto fst-italic fw-bold">
                            
                            {
                                user && <>
                                <Nav.Link as={Link} to="/additems">Add</Nav.Link>
                                <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
                                <Nav.Link as={Link} to="/myitems">My Items</Nav.Link>
                                </>
                            }

                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>

                            {
                                user ?

                                
                                    <button className='btn btn-link fst-italic fw-bold text-success text-decoration-none
                                    text-white bg-success px-4 py-2 rounded-pill ms-3' onClick={handleSignOut}>Sign Out</button>
                                :
                                <Nav.Link as={Link} to="login" className='
                                text-white bg-success px-4 py-2 rounded-pill ms-3'>
                                    Login
                                </Nav.Link>
                            
                             }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      
      </>
    );
};

export default Header;