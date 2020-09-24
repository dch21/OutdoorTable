import React from "react";
import { connect } from "react-redux";
import { getRestaurant, searchRestaurant } from "../../actions/restaurant_actions";
import SearchForm from "./search_form";

const mSTP = (state) => {
    return {
        // restaurants: state.entities.restaurants[restaurantId],
    };
};

const mDTP = (dispatch) => {
    return {
        searchRestaurant: (searchTerms) => dispatch(searchRestaurant(searchTerms)),
    };
};

export default connect(null, mDTP)(SearchForm);