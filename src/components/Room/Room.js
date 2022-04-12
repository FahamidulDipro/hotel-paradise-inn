import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Room = (props) => {
  const { id, name, price, picture } = props.room;

  const navigate = useNavigate();
  const showId = () => {
    navigate(`/checkout/${id}`);
  };

  return (
    <Col lg={3} className="m-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <b>Price: </b>
            {price}$
          </Card.Text>
          <Button variant="primary" onClick={() => showId()}>
            Select
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Room;
