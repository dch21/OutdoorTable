import React from "react";
import { connect } from "react-redux";
import { getRestaurant, searchRestaurant } from "../../actions/restaurant_actions";
import SearchForm from "./search_form";
//
import { pendingReservation } from "../../actions/reservations_actions";

const mSTP = (state) => {
    return {
        searchBar: {
            // date: new Date().toISOString().slice(0, 10),
            // time: "7:00PM",
            // party_size: 2,
            // searchTerm: "",
            date: state.entities.reservations.date || new Date().toISOString().slice(0, 10),
            time: state.entities.reservations.time || "7:00PM",
            party_size: state.entities.reservations.party_size || 2,
            searchTerm: "",
        },
        type: "homepage"
    };
};

const mDTP = (dispatch) => {
    return {
        searchRestaurant: (searchTerms) => dispatch(searchRestaurant(searchTerms)),
        //
        pendingReservation: (info) => dispatch(pendingReservation(info))
    };
};

export default connect(mSTP, mDTP)(SearchForm);