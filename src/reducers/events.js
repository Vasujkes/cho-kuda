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

    default:
      return state;
  }
};
