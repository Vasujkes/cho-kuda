import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";

import rootReducer from "./reducers";

export default () => {
 // const store = createStore(rootReducer, applyMiddleware(logger));
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(logger),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
};
