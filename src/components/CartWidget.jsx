import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";

const CartWidget = ({ cart }) => {
  console.log(cart);
  return (
    <>
      Cart <FontAwesomeIcon className="me-1" icon={faCartShopping} />
      <Badge bg="secondary">{cart.length}</Badge>
    </>
  );
};

export default CartWidget;
