export const getEvents = (action, payload) => ({
  type: "EVENTS:FETCH",
  payload
});

export const setCategoryFilter = (filter, category) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
  category
});

export const CategoryFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_ACTIVE: "SHOW_FAVORITE"
};
