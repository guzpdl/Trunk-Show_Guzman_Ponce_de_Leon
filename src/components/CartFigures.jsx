import React from "react";
import { Figure } from "react-bootstrap";

const CartFigures = ({ cartContent }) => {
  console.log(cartContent);

  return cartContent.map((item, index) => {
    return (
      <Figure key={index}>
        <p>{item.id}</p>
      </Figure>
    );
  });
};

export default CartFigures;
