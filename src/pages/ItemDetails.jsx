import React, { useEffect, useState } from "react";
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemDetails = ({ products }) => {
  const { itemId } = useParams();

  const numberId = parseInt(itemId);

  const selectedProduct = products.find(
    (chosenProduct) => chosenProduct.id === numberId
  );

  let [count, setCount] = useState(0);

  const incrementCount = () => {
    count = count + 1;
    setCount(count);
  };
  const decrementCount = () => {
    if (count > 0) count = count - 1;
    setCount(count);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="text-start">
      <Row>
        <Col lg={8} md={6}>
          <Image
            src={`../${selectedProduct?.images?.img1}`}
            alt={itemId}
            style={{ width: "24rem" }}
            className="me-4 my-4"
            fluid
          />
          <Image
            src={`../${selectedProduct?.images?.img2}`}
            alt={itemId}
            style={{ width: "24rem" }}
            fluid
          />
        </Col>

        <Col className="mt-4  text-dark h-75" lg={4} md={6}>
          {" "}
          <h2>{selectedProduct?.name}</h2>
          <p className="pt-2">{selectedProduct?.description}</p>
          <h5 className="pt-5">Price ${selectedProduct?.price} </h5>
          <div className="pt-2">
            <p>Quantity</p>
            <div className="d-flex align-items-baseline ">
              <Button
                className="square rounded-0"
                variant="outline-secondary"
                onClick={decrementCount}
              >
                -
              </Button>
              <p className="mx-2 square ">{count}</p>
              <Button
                className="square rounded-0"
                variant="outline-secondary"
                onClick={incrementCount}
              >
                +
              </Button>
              <Button
                className="ms-1 square rounded-0"
                variant="outline-secondary"
              >
                Add to your bag
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetails;
