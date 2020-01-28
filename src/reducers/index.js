import { combineReducers } from "redux";
import events from "./events";
import categoryFilters from "./category";


export default combineReducers({
  events,
  categoryFilters
});
