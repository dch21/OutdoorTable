import React from "react";
import { connect } from "react-redux";
import { getReviews } from "../../actions/reviews_actions";
import ReviewsList from "./reviews_list";

const mSTP = (state, ownProps) => {
    return {
        reviews: Object.values(state.entities.reviews),
        restaurantId: parseInt(Object.keys(state.entities.restaurants)[0])
    };
};

const mDTP = (dispatch) => {
    return {
        getReviews: (restaurantId) => dispatch(getReviews(restaurantId)),
    };
};

export default connect(mSTP, mDTP)(ReviewsList);