import React from "react";
import { connect } from "react-redux";
import { getRestaurant } from "../../actions/restaurant_actions";
import RestaurantShow from "./restaurant_show";

const mSTP = (state, ownProps) => {
    debugger
    const restaurantId = ownProps.match.params.restaurantId;
    return {
        restaurant: state.entities.restaurants[restaurantId],
        restaurantId: restaurantId
    };
};

const mDTP = (dispatch) => {
    return {
        getRestaurant: (restaurantId) => dispatch(getRestaurant(restaurantId)),
    };
};

export default connect(mSTP, mDTP)(RestaurantShow);