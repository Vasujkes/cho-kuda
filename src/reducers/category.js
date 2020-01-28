import { CategoryFilters } from "../actions/events";

const categoryFilters = (state = CategoryFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action;
    default:
      return state;
  }
};



export default categoryFilters;
