import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleClick = (eventHTML) => {
    eventHTML.preventDefault();
    navigate(`/${eventHTML.target.id}`);
  };

  return (
    <Navbar bg="white" expand="lg" sticky="top">
      <Container>
        <Link onClick={handleClick} id="">
          <Navbar.Brand>
            <img src="/assets/images/logo.webp" alt="logoFren" />{" "}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleClick} id="">
              {" "}
              Home{" "}
            </Nav.Link>
            <NavDropdown title="Products">
              <NavDropdown.Item id="totes" onClick={handleClick}>
                Totes
              </NavDropdown.Item>
              <NavDropdown.Item id="bags" onClick={handleClick}>
                Bags
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link className="m-3" href="#link">
            <CartWidget />
          </Nav.Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for a product..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
