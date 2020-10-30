import React from "react";
import { connect } from "react-redux";
import { getRestaurant, searchRestaurant } from "../../actions/restaurant_actions";
import ModelSearch from "./model_search";
import { closeModal } from "../../actions/modal_actions";


const mSTP = (state) => {
    return {
        searchBar: {
            date: new Date().toISOString().slice(0, 10),
            time: "7:00PM",
            party_size: 2,
            searchTerm: "",
        },
        // type: "homepage"
    };
};

const mDTP = (dispatch) => {
    return {
        searchRestaurant: (searchTerms) => dispatch(searchRestaurant(searchTerms)),
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mSTP, mDTP)(ModelSearch);