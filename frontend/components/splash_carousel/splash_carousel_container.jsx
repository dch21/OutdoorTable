import React from "react";
import { connect } from "react-redux";
import { searchRestaurant } from "../../actions/restaurant_actions";
import SplashCarousel from "./splash_carousel";

const mSTP = (state) => {
    return {
        results: Object.values(state.entities.searchResults),
    };
};

const mDTP = (dispatch) => {
    return {
        searchRestaurant: (searchTerms) => dispatch(searchRestaurant(searchTerms))
    };
};

export default connect(mSTP, mDTP)(SplashCarousel);