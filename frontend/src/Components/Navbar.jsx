import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default function MainNav() {
  return (
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <div className="buttons">
        <Button variant="outline-secondary">Logout</Button>{' '}
        </div>
      </Nav>
    </Container>
  </Navbar>
);
}
