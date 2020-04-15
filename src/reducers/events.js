const initialState = {
  categories: [],
  data: [],
  fav: 0,
  loading: true,
  sort: "asc",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "EVENTS:FETCH":
      return {
        ...state,
        data: action.payload.data,
        categories: action.payload.categories,
        loading: false,
      };
    case "SET_FAVORITE":
      return {
        ...state,
        data: state.data.map((event) =>
          event.id === action.id ? { ...event, fav: !event.fav } : event
        ),
        fav: state.data[action.id].fav === true ? state.fav - 1 : state.fav + 1,
      };
    case "TOOGLE_EVENT":
      return {
        ...state,
        sort: (state.sort = action.payload),
      };
    default:
      return state;
  }
};
