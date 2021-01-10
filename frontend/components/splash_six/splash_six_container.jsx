import React from "react";
import { connect } from "react-redux";
import { getRestaurant, searchRestaurant } from "../../actions/restaurant_actions";
import SplashSix from "./splash_six";
//
import { pendingReservation } from "../../actions/reservations_actions";


const mDTP = (dispatch) => {
    return {
        searchRestaurant: (searchTerms) => dispatch(searchRestaurant(searchTerms)),
        //
        pendingReservation: (info) => dispatch(pendingReservation(info))
    };
};

export default connect(null, mDTP)(SplashSix);