export const getEvents = (action, payload) => ({
  type: "EVENTS:FETCH",
  payload
});

export const setFavorite = id => ({
  type: "SET_FAVORITE",
  id
});

export const setCategoryFilter = (filter, category) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
  category
});

export const CategoryFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_FAVORITES: "SHOW_FAVORITE"
};
