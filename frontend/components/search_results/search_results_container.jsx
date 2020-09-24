import React from "react";
import { connect } from "react-redux";
// import { getRestaurant, searchRestaurant } from "../../actions/restaurant_actions";
import SearchResults from "./search_results";

const mSTP = (state) => {
    return {
        results: state.entities.restaurants
    };
};

// const mDTP = (dispatch) => {
//     return {
//         searchRestaurant: (searchTerms) => dispatch(searchRestaurant(searchTerms)),
//     };
// };

export default connect(mSTP, null)(SearchResults);