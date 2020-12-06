import React from "react";
import { connect } from "react-redux";
import SearchResults from "./search_results";
import { getReviews } from "../../actions/reviews_actions";
import { pendingReservation } from "../../actions/reservations_actions";
import { openModal } from "../../actions/modal_actions";
import { addFilter, deleteFilter, resetFilter } from "../../actions/filter_actions";



const mSTP = (state) => {
    return {
        results: Object.values(state.entities.searchResults),
        currentUser: state.session.id,
        filters: state.ui.filters
    };
};

const mDTP = (dispatch) => {
    return {
        pendingReservation: (info) => dispatch(pendingReservation(info)),
        openModal: modal => dispatch(openModal(modal)),
        addFilter: (value) => dispatch(addFilter(value)),
        deleteFilter: (value) => dispatch(deleteFilter(value)),
        resetFilter: () => dispatch(resetFilter())
    };
};

export default connect(mSTP, mDTP)(SearchResults);