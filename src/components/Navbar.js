import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Header = (props) => {
    return (
        <header>
            <Navbar id="navbar" bg="dark" variant="dark" expand="sm" fixed="top">
                <Container>
                    <Link to="/" className="navbar-brand"><i className="fas fa-book"></i> Books</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/books/favorites" className="nav-link">Favorites</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;