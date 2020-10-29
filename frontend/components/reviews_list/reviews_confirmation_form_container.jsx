import React from "react";
import { connect } from "react-redux";
import ReviewsConfirmationForm from "./reviews_confirmation_form";
import { createReview, clearErrors } from "../../actions/reviews_actions";

const mSTP = (state) => {
    return {
        userId: state.session.id,
        userFirstName: state.entities.users[state.session.id].first_name,
        reviewInfo: state.entities.reviewsPending || {},
        errors: state.errors.review || []
    };
};
 
const mDTP = (dispatch) => {
    return {
        createReview: (review) => dispatch(createReview(review)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mSTP, mDTP)(ReviewsConfirmationForm);