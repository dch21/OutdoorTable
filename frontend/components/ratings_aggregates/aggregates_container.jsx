import React from "react";
import { connect } from "react-redux";
import { getAggregates } from "../../actions/aggregates_actions";
import Aggregates from "./aggregates";

const mSTP = (state) => {
    return {
        aggregates: state.entities.aggregates,
    };
};

const mDTP = (dispatch) => {
    return {
        getAggregates: (restaurantId) => dispatch(getAggregates(restaurantId)),
    };
};

export default connect(mSTP, mDTP)(Aggregates);