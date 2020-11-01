import React from "react";
import { connect } from "react-redux";
import { searchRestaurant } from "../../actions/restaurant_actions";
import SplashCarousel from "./splash_carousel";

const mSTP = (state) => {
    return {
        // reviews: Object.values(state.entities.reviews),
        results: Object.values(state.entities.searchResults),
        // currentUser: state.session.id,
        // filters: state.ui.filters
        // hours: state.hours
    };
};

const mDTP = (dispatch) => {
    return {
        searchRestaurant: (searchTerms) => dispatch(searchRestaurant(searchTerms))
    };
};

export default connect(mSTP, mDTP)(SplashCarousel);