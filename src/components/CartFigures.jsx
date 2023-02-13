import React from "react";
import { Container, Figure, Row, Col, Button } from "react-bootstrap";
import { useCartContext } from "../context/cart.context";

const CartFigures = ({ cartContent }) => {
  console.log(cartContent);

  const { removeItemFromCart } = useCartContext();

  const handleRemove = (eventHTML) => {
    removeItemFromCart(+eventHTML.target.value);
  };

  return cartContent.map((item, index) => {
    return (
      <Container key={index}>
        <Row>
          <Col>
            <Figure>
              <Figure.Image
                width={100}
                alt={index}
                src={`../${item.images.img2}`}
              />
              <Figure.Caption>{item.name}</Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <h6>Price</h6>
            <Figure.Caption>{item.price}</Figure.Caption>
          </Col>
          <Col>
            <h6>Quantity</h6>
            <Figure.Caption>{item.amount}</Figure.Caption>
          </Col>
          <Col>
            <h6>Sub total</h6>
            <Figure.Caption>
              {(item.amount * item.price).toFixed(2)}
            </Figure.Caption>
          </Col>
          <Col>
            <Button
              value={item.id}
              className="bg-white text-danger"
              variant="danger"
              onClick={handleRemove}
            >
              Remove product
            </Button>
          </Col>
        </Row>
      </Container>
    );
  });
};

export default CartFigures;
