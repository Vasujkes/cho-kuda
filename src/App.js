import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import VisibleEventList from "./containers/VisibleEventList";
import { Filter } from "./components";
import { Container } from "react-bootstrap";
function App(store) {
  const fetchData = async () => {
    const res = await axios.get(
      `https://event-list-5a26c.firebaseio.com/events.json`
    );

    const data = Object.keys(res.data).map(key => {
      return {
        ...res.data[key],
        id: key
      };
    });
    const categories = res.data
      .map(key => key.categories)
      .join()
      .split(",");
    const payload = {
      data,
      categories: [...new Set(categories)]
    };
    store.dispatch({ type: "EVENTS:FETCH", payload });
  };
  if (store.events.loading) {
    fetchData();
  }
  const sortEvents = payload => {
    store.dispatch({ type: "TOOGLE_EVENT", payload });
  };

  return (
    <div className="App">
      <Container>
        <div className="d-flex flex-column ">
          <Filter
            categories={store.events.categories}
            sortEvents={sortEvents}
            sort={store.events.sort}
            fav={store.events.fav}
          />

          <VisibleEventList />
        </div>
      </Container>
    </div>
  );
}

const mapState = state => ({
  ...state
});
export default connect(mapState)(App);
