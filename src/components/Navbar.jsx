import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { useState } from "react";

const NavBar = () => {
  const [cart, setCart] = useState([]);

  return (
    <Navbar className="square border-bottom border-dark" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Trunk Show </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"> Home </Nav.Link>
            <NavDropdown title="Products">
              <NavDropdown.Item href="#action/3.1">
                Travel organizers
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Accesories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bags</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link"> Personalized orders </Nav.Link>
          </Nav>
          <button
            type="submit"
            onClick={() => {
              const cartCounter = [...cart];
              cartCounter.push(1);
              setCart(cartCounter);
            }}
          >
            TRY CART COUNTER!!!
          </button>
          <Nav.Link className="m-3" href="#link">
            <CartWidget cart={cart} setCart={setCart} />
          </Nav.Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for a product..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
