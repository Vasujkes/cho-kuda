import React from "react";
import { Card, CardDeck, Col } from "react-bootstrap";

const Content = ({ events }) => {
  function formatDate(date) {
    const monthNames = [
      "Января",
      "Февраля",
      "Марта",
      "Апреля",
      "Мая",
      "Июня",
      "Июля",
      "Августа",
      "Сентября",
      "Октября",
      "Ноября",
      "Декабря"
    ];

    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return day + " " + monthNames[monthIndex] + " " + year;
  }
  console.log();
  return (
    <CardDeck >
      <div className=" d-flex flex-wrap bd-highlight ">
        {events.map(event => (
          <Col lg="6">
            <Card>
              <Card.Img
                variant="top"
                src={
                  event.image ||
                  "https://kudago.com/media/thumbs/xl/images/list/32/70/3270129672b5762517fd0856948a5883.jpg"
                }
              />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.body}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  {formatDate(new Date(event.date))}
                </small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </div>
    </CardDeck>
  );
};

export default Content;
