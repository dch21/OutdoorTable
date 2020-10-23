import React from "react";
import { connect } from "react-redux";
// import { getRestaurant, searchRestaurant } from "../../actions/restaurant_actions";
import SearchResults from "./search_results";
import { getReviews } from "../../actions/reviews_actions";
import { getHours } from "../../actions/hours_actions";


const mSTP = (state) => {
    return {
        // reviews: Object.values(state.entities.reviews),
        results: Object.values(state.entities.searchResults),
        // hours: state.hours
    };
};

const mDTP = (dispatch) => {
    return {
        getHours: (query) => dispatch(getHours(query))
    };
};

export default connect(mSTP, mDTP)(SearchResults);