import React from "react";
import { connect } from "react-redux";
import { getRestaurant } from "../../actions/restaurant_actions";
import { getAggregates } from "../../actions/aggregates_actions";
import RestaurantShow from "./restaurant_show";

const mSTP = (state, ownProps) => {
    const restaurantId = ownProps.match.params.restaurantId;
    return {
        restaurant: state.entities.restaurants[restaurantId],
        restaurantId: restaurantId,
        aggregates: state.entities.aggregates
    };
};

const mDTP = (dispatch) => {
    return {
        getRestaurant: (restaurantId) => dispatch(getRestaurant(restaurantId)),
        getAggregates: (restaurantId) => dispatch(getAggregates(restaurantId)),
    };
};

export default connect(mSTP, mDTP)(RestaurantShow);