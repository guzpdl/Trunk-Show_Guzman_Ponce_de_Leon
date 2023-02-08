import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";
import { useCartContext } from "../context/cart.context";

const CartWidget = () => {
  const { cart } = useCartContext();
  return (
    <div className="text-muted">
      My Bag <FontAwesomeIcon className="me-1" icon={faBagShopping} />
      <Badge bg="secondary">{cart.length}</Badge>
    </div>
  );
};

export default CartWidget;
