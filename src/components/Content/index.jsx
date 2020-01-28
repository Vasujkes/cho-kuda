import React from "react";
import EventCard from "./Card";

import { CardDeck } from "react-bootstrap";

const Content = ({ events, setFavorite }) => {
  return (
    <CardDeck>
      <div className=" d-flex flex-wrap bd-highlight ">
        {events.map((event, index) => (
              <EventCard event={event} key={index} setFavorite={setFavorite}/>
            ))}
      </div>
    </CardDeck>
  );
};

export default Content;
