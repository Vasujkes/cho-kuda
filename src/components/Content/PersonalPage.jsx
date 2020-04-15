import React from "react";
import { Card, Col, Button } from "react-bootstrap";
function PersonalPage({ event }) {
  return (
    <Col lg="6">
      <Card>
        <Card.Img
          variant="top"
          src={
            event[0].image ||
            "https://kudago.com/media/thumbs/xl/images/list/32/70/3270129672b5762517fd0856948a5883.jpg"
          }
        />
        <div className="card-body">{event[0].body}</div>
      </Card>
    </Col>
  );
}

export default PersonalPage;
