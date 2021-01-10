import React from "react";
import { connect } from "react-redux";
import ReservationForm from "./reservation_form";
import { pendingReservation } from "../../actions/reservations_actions";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state) => {
    debugger
    return {
        formType: "Make a reservation",
        reservation: {
            date: new Date().toISOString().slice(0, 10), 
            time: "7:00PM",
            party_size: 2,
            id: parseInt(Object.keys(state.entities.restaurants)[0]),
            name: Object.values(state.entities.restaurants)[0].name,
            toggleButton: false
        },
        currentUser: state.session.id,
    };
};
 
const mDTP = (dispatch) => {
    return {
        pendingReservation: (info) => dispatch(pendingReservation(info)),
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(mSTP, mDTP)(ReservationForm);