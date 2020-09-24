import React from "react";
import { connect } from "react-redux";
import { getRestaurant } from "../../actions/restaurant_actions";
import ReservationForm from "./reservation_form;

const mSTP = (state, ownProps) => {
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

export default connect(mSTP, mDTP)(ReservationForm);