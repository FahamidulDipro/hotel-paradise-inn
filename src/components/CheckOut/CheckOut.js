import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { LoadHotelsContext } from "../../App";

const CheckOut = () => {
  const { roomId } = useParams();
  const rooms = useContext(LoadHotelsContext);
  const roomDetails = rooms.find((singleRoom) => singleRoom.id === roomId);
  const { picture, name, price } = roomDetails;

  return (
    <div>
      <h1>Check Out</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <b>Price: </b>
            {price}$
          </Card.Text>
          <Button variant="primary">Checkout</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CheckOut;
