import React from "react";
import { Container, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemListContainer = ({ bags, totes }) => {
  return (
    <Container className="my-4 text-muted">
      <Row>
        <h2 className=" text-start">Tool Bags</h2>
        <div className="d-flex flex-wrap">
          {bags?.map((bag, index) => {
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
                  <Card.Img variant="top" src={bag.images.img1} />
                  <Card.Body>
                    <Card.Title>{bag.name}</Card.Title>
                  </Card.Body>
                </Link>
              </Card>
            );
          })}
        </div>
        <h2 className="mt-4 ms-2 text-start">Tour Totes</h2>
        <div className="d-flex flex-wrap">
          {totes?.map((tote, index) => {
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
                  <Card.Img variant="top" src={tote.images.img1} />
                  <Card.Body>
                    <Card.Title>{tote.name}</Card.Title>
                  </Card.Body>
                </Link>
              </Card>
            );
          })}
        </div>
      </Row>
    </Container>
  );
};

export default ItemListContainer;
