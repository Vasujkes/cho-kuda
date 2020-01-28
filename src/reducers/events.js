const initialState = { categories: [], data: [], loading: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case "EVENTS:FETCH":
      return {
        ...state,
        data: action.payload.data,
        categories: action.payload.categories,
        loading: false
      };
    case "SET_FAVORITE":
      return {
        ...state,
        data: state.data.map(event =>
          event.id === action.id ? { ...event, fav: !event.fav } : event
        )
      };

    default:
      return state;
  }
};
