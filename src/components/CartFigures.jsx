import React from "react";
import { Container, Figure, Row, Col, Button } from "react-bootstrap";

const CartFigures = ({ cartContent }) => {
  console.log(cartContent);

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
            <Figure.Caption>{item.amount * item.price}</Figure.Caption>
          </Col>
          <Col>
            <Button className="bg-white text-danger" variant="danger">
              Remove product
            </Button>
          </Col>
        </Row>
      </Container>
    );
  });
};

export default CartFigures;
