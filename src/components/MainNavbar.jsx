import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from "react-router-bootstrap";

function MainNavbar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Azeno Flashcards</Navbar.Brand>
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Decks</Nav.Link>
                    </LinkContainer>
                    <Nav.Link href="#features">Profile</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;