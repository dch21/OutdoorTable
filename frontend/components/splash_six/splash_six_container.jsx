import React from "react";
import { connect } from "react-redux";
import { getRestaurant, searchRestaurant } from "../../actions/restaurant_actions";
import SplashSix from "./splash_six";


const mDTP = (dispatch) => {
    return {
        searchRestaurant: (searchTerms) => dispatch(searchRestaurant(searchTerms)),
    };
};

export default connect(null, mDTP)(SplashSix);