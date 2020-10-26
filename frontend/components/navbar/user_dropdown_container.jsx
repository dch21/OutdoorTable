import React from "react";
import { connect } from "react-redux";
import UserDropdown from "./user_dropdown";

const mSTP = (state) => {
    return {
        userId: state.session.id,
    };
};
 
// const mDTP = (dispatch) => {
//     return {
//         // action: (reservation) => dispatch(createReservation(reservation)),
//     };
// };

export default connect(mSTP, null)(UserDropdown);