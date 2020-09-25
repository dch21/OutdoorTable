import React from "react";
import { connect } from "react-redux";
import { createReservation } from "../../actions/reservations_actions";
import ReservationForm from "./reservation_form";

const mSTP = (state) => {
    return {
        formType: "Make a reservation",
        reservation: {
            datetime: new Date(),
            notes: "Make a note or accommodations request here.",
            party_size: 2,
            restaurant_id: parseInt(Object.keys(state.entities.restaurants)[0]),
            user_id: parseInt(Object.keys(state.entities.restaurants)[4])
        }
    };
};
 
const mDTP = (dispatch) => {
    return {
        action: (reservation) => dispatch(createReservation(reservation)),
    };
};

//changed to null
export default connect(mSTP, mDTP)(ReservationForm);