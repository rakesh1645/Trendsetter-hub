import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { useLocation } from "react-router-dom";

export default function AddToCart() {
  const [qty, setQty] = useState(1);
  const [detail, setDetail] = useState({});

  const loc = useLocation();
  console.log(loc.state);

  useEffect(() => {
    if (loc.state) {
      setDetail(loc.state);
    }
  }, [loc.state]);

  function QtyAdd() {
    setQty(qty + 1);
  }

  function QtySub() {
    if (qty > 1) {
      setQty(qty - 1);
    }
  }

  return (
    <Container style={{ margin: "100px" }}>
      <Row>
        <Col>
          {detail.img && <Image src={detail.img} />}
        </Col>
        <Col>
          <Button onClick={QtyAdd}>+</Button>
          <p>{qty}</p>
          <Button onClick={QtySub}>-</Button>
        </Col>
      </Row>
    </Container>
  );
}
