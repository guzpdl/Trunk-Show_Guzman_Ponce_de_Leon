import React from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

const Products = ({ products, bags, totes }) => {
  const { category } = useParams();
  const categoryParam = category;

  return (
    <Container className="my-4 text-muted">
      <Row>
        <h2 className=" text-start ms-2">Check our {categoryParam}</h2>
        <div className="d-flex flex-wrap">
          {categoryParam === "bags"
            ? bags.map((bag, index) => {
                return (
                  <Card
                    key={index}
                    className="mx-2 square border border-white"
                    style={{ width: "15rem" }}
                  >
                    <Link
                      to={`/${bag.category}/${bag.id}`}
                      className="text-muted"
                      style={{ textDecoration: "none" }}
                    >
                      <Card.Img variant="top" src={bag.images[1]} />
                      <Card.Body>
                        <Card.Title>{bag.name}</Card.Title>
                      </Card.Body>
                    </Link>
                  </Card>
                );
              })
            : categoryParam === "totes"
            ? totes?.map((tote, index) => {
                return (
                  <Card
                    key={index}
                    className="mx-2 square border border-white"
                    style={{ width: "15rem" }}
                  >
                    <Link
                      to={`/${tote.category}/${tote.id}`}
                      className="text-muted"
                      style={{ textDecoration: "none" }}
                    >
                      <Card.Img variant="top" src={tote.images[1]} />
                      <Card.Body>
                        <Card.Title>{tote.name}</Card.Title>
                      </Card.Body>
                    </Link>
                  </Card>
                );
              })
            : products?.map((product, index) => {
                return (
                  <Card
                    key={index}
                    className="mx-2 square border border-white"
                    style={{ width: "15rem" }}
                  >
                    <Link
                      to={`/${product.category}/${product.id}`}
                      className="text-muted"
                      style={{ textDecoration: "none" }}
                    >
                      <Card.Img variant="top" src={product.images[0]} />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                      </Card.Body>
                    </Link>
                  </Card>
                );
              })}
        </div>
        {categoryParam !== "products" ? (
          <Link to={"/products"}>
            <Button variant="outline-secondary">See all our products</Button>
          </Link>
        ) : null}
      </Row>
    </Container>
  );
};

export default Products;
