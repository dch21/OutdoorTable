import React from "react";
import { connect } from "react-redux";
import UserPage from "./user_page";

const mSTP = (state) => {
    return {
        userId: state.session.id,
        userFirstName: state.entities.users[state.session.id].first_name
    };
};
 
const mDTP = (dispatch) => {
    return {
        // action: (reservation) => dispatch(createReservation(reservation)),
    };
};

export default connect(mSTP, mDTP)(UserPage);