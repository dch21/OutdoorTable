import React from "react";
import { connect } from "react-redux";
import UserPage from "./user_page";
import { requestReservations, deleteReservation } from "../../actions/reservations_actions";
import { getThirtyDays, pendingReview } from "../../actions/reviews_actions";


const mSTP = (state) => {
    return {
        userId: state.session.id,
        userFirstName: state.entities.users[state.session.id].first_name,
        reservations: Object.values(state.entities.userReservations) || {}
    };
};
 
const mDTP = (dispatch) => {
    return {
        requestReservations: (userId) => dispatch(requestReservations(userId)),
        getThirtyDays: (info) => dispatch(getThirtyDays(info)),
        pendingReview: (info) => dispatch(pendingReview(info)),
        deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId))
    };
};

export default connect(mSTP, mDTP)(UserPage);