import React, { useState } from "react";
import { Button, Offcanvas, Form } from "react-bootstrap";
import "./CheckoutOffCanvas.css";

const OffCanvas = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        Proceed with the order
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Checkout</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Provide the following information so we can prepare your order:
          <Form className="mt-3">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="John" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" placeholder="Doe" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="+ 01 234 567 88"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Repeat your Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Button variant="secondary" className="me-3" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={handleClose}>
              Confirm
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const CheckoutOffCanvas = () => {
  return (
    <>
      {["start"].map((placement, idx) => (
        <OffCanvas
          key={idx}
          placement={placement}
          name={placement}
          className="offCanvas-style"
        />
      ))}
    </>
  );
};

export default CheckoutOffCanvas;
