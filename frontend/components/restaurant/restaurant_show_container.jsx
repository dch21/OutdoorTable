import React from "react";
import { connect } from "react-redux";
import { getRestaurant } from "../../actions/restaurant_actions";
import { getAggregates } from "../../actions/aggregates_actions";
import RestaurantShow from "./restaurant_show";

//
import { getReviews, clearReviews } from "../../actions/reviews_actions";
//

const mSTP = (state, ownProps) => {
    const restaurantId = ownProps.match.params.restaurantId;
    // debugger
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

        //
        getReviews: (restaurantId) => dispatch(getReviews(restaurantId)),
        clearReviews: () => dispatch(clearReviews())
        //
    };
};

export default connect(mSTP, mDTP)(RestaurantShow);