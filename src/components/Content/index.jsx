import React, { useEffect, useState } from "react";
import EventCard from "./Card";
import PersonalPage from "./PersonalPage";
import { CardDeck } from "react-bootstrap";
import { sortEvents } from "../../containers/EventSort";
import { Loader } from "../";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Content = ({ events, setFavorite, loading, sort }) => {
  const [personalLink, setPersonalLink] = useState({
    slug: "/about",
    event: null
  });
  const eventsSortedList = sortEvents(events, sort);
  const openEventPage = (slug, id) => {
    let page = events.filter(event => event.id === id);
    let link = "/" + slug;
    setPersonalLink({ slug: link, event: page });
  };

  return (
    <CardDeck>
      <Router>
        <Route path={personalLink.slug}>
          <PersonalPage event={personalLink.event} />
        </Route>
        <Route path="/" exact>
          <div className=" d-flex flex-wrap bd-highlight ">
            {!loading ? (
              eventsSortedList.map((event, index) => (
                <EventCard
                  event={event}
                  key={index}
                  setFavorite={setFavorite}
                  openEventPage={openEventPage}
                />
              ))
            ) : (
              <div className="d-flex flex-wrap justify-content-center">
                <Loader />
              </div>
            )}
          </div>
        </Route>
      </Router>
    </CardDeck>
  );
};

export default Content;
