import React from "react";
import { connect } from "react-redux";
// import { getRestaurant, searchRestaurant } from "../../actions/restaurant_actions";
import SearchResults from "./search_results";
import { getReviews } from "../../actions/reviews_actions";
// import { getHours } from "../../actions/hours_actions";
import { pendingReservation } from "../../actions/reservations_actions";
import { openModal } from "../../actions/modal_actions";



const mSTP = (state) => {
    return {
        // reviews: Object.values(state.entities.reviews),
        results: Object.values(state.entities.searchResults),
        currentUser: state.session.id,
        // hours: state.hours
    };
};

const mDTP = (dispatch) => {
    return {
        // getHours: (query) => dispatch(getHours(query))
        pendingReservation: (info) => dispatch(pendingReservation(info)),
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(mSTP, mDTP)(SearchResults);