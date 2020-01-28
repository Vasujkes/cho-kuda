import { connect } from "react-redux";
import { Content } from "../components";
import { CategoryFilters, setFavorite } from "../actions/events";

const getVisibleEvents = (events, action) => {
 
  switch (action.filter) {
    case CategoryFilters.SHOW_ALL:
      return events.data;

    case CategoryFilters.SHOW_ACTIVE:
      return events.data.filter(event =>
        event.categories.includes(action.category)
      );
    case CategoryFilters.SHOW_FAVORITE:
      return events.data.filter(event => event.fav === true);

    default:
      throw new Error("Unknown filter: " + action.filter);
  }
};

const mapStateToProps = state => ({
  events: getVisibleEvents(state.events, state.categoryFilters),
  loading: state.events.loading,
  sort: state.events.sort
});

const mapDispatchToProps = dispatch => ({
  setFavorite: id => dispatch(setFavorite(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
