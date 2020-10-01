import React from "react";
import { connect } from "react-redux";
// import { getRestaurant, searchRestaurant } from "../../actions/restaurant_actions";
import SearchResults from "./search_results";
import { getReviews } from "../../actions/reviews_actions";

const mSTP = (state) => {
    return {
        // reviews: Object.values(state.entities.reviews),
        results: Object.values(state.entities.searchResults)
    };
};

// const mDTP = (dispatch) => {
//     return {
//         getReviews: (restaurantId) => dispatch(getReviews(restaurantId)),
//     };
// };

export default connect(mSTP, null)(SearchResults);