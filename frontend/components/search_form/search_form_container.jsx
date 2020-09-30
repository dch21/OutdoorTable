import React from "react";
import { connect } from "react-redux";
import { getRestaurant, searchRestaurant } from "../../actions/restaurant_actions";
import SearchForm from "./search_form";

const mSTP = (state) => {
    return {
        searchBar: {
            date: new Date().toISOString().slice(0, 10),
            time: "7:00PM",
            party_size: 2,
            searchTerm: "",
        }
    };
};

const mDTP = (dispatch) => {
    return {
        searchRestaurant: (searchTerms) => dispatch(searchRestaurant(searchTerms)),
    };
};

export default connect(mSTP, mDTP)(SearchForm);