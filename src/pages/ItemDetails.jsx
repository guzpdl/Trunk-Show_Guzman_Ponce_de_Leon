import React, { useEffect, useState } from "react";
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useCartContext } from "../context/cart.context";
import { getOneProductFirebase } from "../service/firebase.service";

const ItemDetails = () => {
  const { itemId } = useParams();
  let [count, setCount] = useState(0);
  let [item, setItem] = useState();
  const { addItemToCart } = useCartContext();
  const navigate = useNavigate();

  const getProductData = () => {
    getOneProductFirebase(itemId)
      .then((productData) => {
        setItem(productData);
      })
      .catch((error) => console.log(error));
  };

  const incrementCount = () => {
    count = count + 1;
    setCount(count);
  };
  const decrementCount = () => {
    if (count > 0) count = count - 1;
    setCount(count);
  };

  const handleClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProductData();
  }, []);

  return (
    <Container className="text-start">
      <Row>
        <Col lg={8} md={6}>
          <Image
            src={`../${item?.images?.[0]}`}
            alt={itemId}
            style={{ width: "24rem" }}
            className="me-4 my-4"
            fluid
          />
          <Image
            src={`../${item?.images?.[1]}`}
            alt={itemId}
            style={{ width: "24rem" }}
            fluid
          />
        </Col>

        <Col className="mt-4  text-dark h-75" lg={4} md={6}>
          {" "}
          <h2>{item?.name}</h2>
          <p className="pt-2">{item?.description}</p>
          <h5 className="pt-5">Price ${item?.price} </h5>
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
                onClick={() => {
                  addItemToCart(item, count);
                  setCount(0);
                }}
              >
                Add to your bag
              </Button>
            </div>
          </div>
          <Button
            className="my-4"
            variant="outline-secondary"
            onClick={handleClick}
          >
            See more products
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetails;
