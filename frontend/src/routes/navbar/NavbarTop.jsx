// Navbar
import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import './navbar.styles.scss'
import { Button } from 'react-bootstrap';

import CartIcon from "../../Components/cart-icon/cart-icon.component";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";

import { LinkContainer } from "react-router-bootstrap";

import { CartContext } from "../../contexts/cart.context";

export default function NavbarTop() {
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <Navbar bg="dark" variant="dark" className="nav-bar">
        <Container>
        <LinkContainer to="/home">
            <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          </LinkContainer>
          
          <Nav className="ml-auto">
          <LinkContainer to="/home"><Nav.Link href="#">Home</Nav.Link></LinkContainer>
          <LinkContainer to="/profile"><Nav.Link href="#">Profile</Nav.Link></LinkContainer>
          <LinkContainer to="/shop"><Nav.Link href="/shop">Shop</Nav.Link></LinkContainer>
          <LinkContainer to="/Contact"><Nav.Link href="#">Contact</Nav.Link></LinkContainer>
            <div className="buttons">
              <Button variant="outline-secondary">Logout</Button>{" "}
            </div>
            <CartIcon />
            {isCartOpen && <CartDropdown />}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
