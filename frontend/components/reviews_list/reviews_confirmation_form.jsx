import React from "react";
import { connect } from "react-redux";
import ReviewsConfirmationForm from "./user_page";
import { createReview } from "../../actions/reviews_actions";

const mSTP = (state) => {
    return {
        userId: state.session.id,
        userFirstName: state.entities.users[state.session.id].first_name,
        reservations: Object.values(state.entities.userReservations) || {}
    };
};
 
const mDTP = (dispatch) => {
    return {
        createReview: (review) => dispatch(createReview(review))
    };
};

export default connect(mSTP, mDTP)(ReviewsConfirmationForm);