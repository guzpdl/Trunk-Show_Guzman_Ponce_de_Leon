import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";
import { CartContext } from "../context/cart.context";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="text-muted">
      My Bag <FontAwesomeIcon className="me-1" icon={faBagShopping} />
      <Badge bg="secondary">{cart.length}</Badge>
    </div>
  );
};

export default CartWidget;
