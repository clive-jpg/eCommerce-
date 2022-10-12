// Navbar
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button} from 'react-bootstrap';
import LogoutButton from "../Components/button/LogoutButton"

export default function NavbarTop() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Profile</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <LogoutButton/>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
