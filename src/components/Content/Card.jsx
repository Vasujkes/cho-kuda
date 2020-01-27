import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import classNames from "classnames";

const EventCard = ({ event }) => {
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

  return (
    <Col lg="6">
      <Card>
        <Card.Img
          variant="top"
          src={
            event.image ||
            "https://kudago.com/media/thumbs/xl/images/list/32/70/3270129672b5762517fd0856948a5883.jpg"
          }
        />
        <div
          className={classNames("card-content__like", {
            "card-content__like--active": event.fav
          })}
          onClick={() => console.log(event)}
        >
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.3961 2.93274L17.3964 2.93307C17.7719 3.3084 18.0698 3.75403 18.273 4.24451C18.4762 4.735 18.5808 5.26071 18.5808 5.79163C18.5808 6.32255 18.4762 6.84827 18.273 7.33875C18.0698 7.82923 17.7719 8.27486 17.3964 8.65019L17.3962 8.65036L16.4246 9.62202L10 16.0466L3.57544 9.62202L2.60377 8.65036C1.84559 7.89218 1.41965 6.86386 1.41965 5.79163C1.41965 4.7194 1.84559 3.69109 2.60377 2.9329C3.36195 2.17472 4.39027 1.74878 5.4625 1.74878C6.53473 1.74878 7.56304 2.17472 8.32122 2.9329L9.29289 3.90457C9.68341 4.2951 10.3166 4.2951 10.7071 3.90457L11.6788 2.9329L11.6789 2.93274C12.0543 2.55723 12.4999 2.25936 12.9904 2.05613C13.4809 1.85289 14.0066 1.74829 14.5375 1.74829C15.0684 1.74829 15.5941 1.85289 16.0846 2.05613C16.5751 2.25936 17.0207 2.55723 17.3961 2.93274Z"
              stroke="#FF647C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <Card.Body>
          <Card.Title>
            <div className="d-flex justify-content-between align-items-center">
              {event.title}
              {event.is_free ? (
                <Button variant="outline-warning">Халява</Button>
              ) : (
                <Button variant="outline-warning">{event.price}</Button>
              )}
            </div>
          </Card.Title>
          <Card.Text>{event.body}</Card.Text>
          {event.categories.map((cat, index) => (
            <Button
              key={index}
              variant="outline-dark"
              size="sm"
              className="mr-2"
            >
              {cat}
            </Button>
          ))}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            {formatDate(new Date(event.date))}
          </small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default EventCard;
