import React from "react";
import { connect } from "react-redux";
import UserPage from "./user_page";
import { requestReservations } from "../../actions/reservations_actions";

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
    };
};

export default connect(mSTP, mDTP)(UserPage);