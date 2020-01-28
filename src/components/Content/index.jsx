import React from "react";
import EventCard from "./Card";
import { CardDeck } from "react-bootstrap";
import { sortEvents } from "../../containers/EventSort";
import { Loader } from "../";

const Content = ({ events, setFavorite, loading, sort }) => {
  const eventsSortedList = sortEvents(events, sort);
  return (
    <CardDeck>
      <div className=" d-flex flex-wrap bd-highlight ">
        {!loading ? (
          eventsSortedList.map((event, index) => (
            <EventCard event={event} key={index} setFavorite={setFavorite} />
          ))
        ) : (
          <div className="d-flex flex-wrap justify-content-center">
            <Loader />
          </div>
        )}
      </div>
    </CardDeck>
  );
};

export default Content;
