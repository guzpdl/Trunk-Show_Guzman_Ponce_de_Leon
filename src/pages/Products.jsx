import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Products = () => {
  const { category } = useParams();

  console.log(category);

  return (
    <Container>
      <h1>Check our {category}</h1>
    </Container>
  );
};

export default Products;
