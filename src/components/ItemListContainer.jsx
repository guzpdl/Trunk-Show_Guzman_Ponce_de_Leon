import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import getProducts from "../service/axios.service";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const productData = () => {
    getProducts()
      .then((productsInfo) => {
        setProducts(productsInfo.products);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    productData();
  }, []);

  return (
    <Container className="my-4 text-muted">
      <h2 className="ms-2 text-start">Tool Bags</h2>
      <div className="d-flex">
        {products.map((productDetails, index) => {
          console.log(productDetails);
          return (
            <Card key={index} className="mx-2" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={productDetails.images.img1} />
              <Card.Body>
                <Card.Title>{productDetails.name}</Card.Title>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default ItemListContainer;
