import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CartWidget from "./CartWidget";
import "./CartModal.css";
import { useCartContext } from "../context/cart.context";

const CartModal = () => {
  const [show, setShow] = useState(false);
  const { cart } = useCartContext();

  return (
    <>
      <Button
        className="bg-white"
        variant="light"
        onClick={() => setShow(true)}
      >
        <CartWidget cart={cart} />
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w modal-90h"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Your bag
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p></p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CartModal;
