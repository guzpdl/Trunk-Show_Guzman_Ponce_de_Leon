import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CartWidget from "./CartWidget";
import "./CartModal.css";
import { useCartContext } from "../context/cart.context";
import { useNavigate } from "react-router-dom";
import CartFigures from "./CartFigures";
import CheckoutOffCanvas from "./CheckoutOffCanvas";

const CartModal = () => {
  const [show, setShow] = useState(false);
  const { cart } = useCartContext();

  const navigate = useNavigate();

  const handleClick = (eventHTML) => {
    eventHTML.preventDefault();
    navigate(`/${eventHTML.target.id}`);
    setShow(false);
  };

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
          {cart.length === 0 ? (
            <>
              <h4>is empty. Check our products and add them to your bag.</h4>
              <Button
                onClick={handleClick}
                id="products"
                variant="outline-secondary"
                className="mt-2"
              >
                List of products
              </Button>
            </>
          ) : (
            <CartFigures />
          )}
        </Modal.Body>
        {cart.length !== 0 && (
          <>
            <Modal.Footer>
              <Modal.Title>
                Total: ${" "}
                {cart
                  .map((product) => product.amount * product.price)
                  .reduce((prev, next) => prev + next)
                  .toFixed(2)}
              </Modal.Title>
            </Modal.Footer>
            <Modal.Footer>
              <Button
                onClick={handleClick}
                id="products"
                variant="outline-secondary"
              >
                Add more products to your bag
              </Button>
              <CheckoutOffCanvas />
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
};

export default CartModal;
