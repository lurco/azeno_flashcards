import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from "react-router-bootstrap";
import useLogout from "../hooks/useLogout";

function MainNavbar() {
    const logout = useLogout();

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Azeno Flashcards</Navbar.Brand>
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Decks</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/register">
                        <Nav.Link>Register</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <Nav.Link>Profile</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/flashcards">
                        <Nav.Link>Flashcards</Nav.Link>
                    </LinkContainer>
                    <Nav.Link onClick={logout}>Logout</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;