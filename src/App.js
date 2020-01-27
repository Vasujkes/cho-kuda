import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { Loader, Filter, Content } from "./components";
import { Container, Row, Col } from "react-bootstrap";

function App(store) {
  useEffect(() => {
    fetchData();
  }, []);
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
  return (
    <div className="App">
      {store.events.loading ? (
        <Loader />
      ) : (
        <Container>
          <div className="d-flex flex-column ">
            <Filter categories={store.events.categories} />
            <Content events={store.events.data} />
          </div>
        </Container>
      )}
    </div>
  );
}

const mapState = state => ({
  ...state
});
export default connect(mapState)(App);
