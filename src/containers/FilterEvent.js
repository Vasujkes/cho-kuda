import { connect } from "react-redux";
import { setCategoryFilter } from "../actions/events";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.categoryFilters
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setCategoryFilter(ownProps.filter, ownProps.category))
});
export default connect(mapStateToProps, mapDispatchToProps)(Link);
