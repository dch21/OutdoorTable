import React from "react";
import { connect } from "react-redux";
import { getRestaurant, searchRestaurant } from "../../actions/restaurant_actions";
import SplashSix from "./splash_six";

// const mSTP = (state) => {
//     return {
//         searchBar: {
//             date: new Date().toISOString().slice(0, 10),
//             time: "7:00PM",
//             party_size: 2,
//             searchTerm: "",
//         }
//     };
// };

const mDTP = (dispatch) => {
    return {
        searchRestaurant: (searchTerms) => dispatch(searchRestaurant(searchTerms)),
    };
};

export default connect(null, mDTP)(SplashSix);