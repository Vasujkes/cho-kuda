export const getEvents = (event, payload) => ({
  type: "EVENTS:FETCH",
  payload : {
    data,
    categories
  }
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
