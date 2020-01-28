import React from "react";
import EventCard from "./Card";

import { Card, CardDeck, Col } from "react-bootstrap";

const Content = ({ events }) => {
  return (
    <CardDeck>
      <div className=" d-flex flex-wrap bd-highlight ">
        {events.length > 0
          ? events.map((event, index) => (
              <EventCard event={event} key={index} />
            ))
          : console.log("Пусто")}
      </div>
    </CardDeck>
  );
};

export default Content;
