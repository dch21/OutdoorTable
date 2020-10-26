import React from "react";
import { connect } from "react-redux";
import UserPage from "./user_page";

const mSTP = (state) => {
    return {
    
    };
};
 
const mDTP = (dispatch) => {
    return {
        // action: (reservation) => dispatch(createReservation(reservation)),
    };
};

export default connect(mSTP, mDTP)(UserPage);