import React from "react";
import { connect } from "react-redux";
import { getAggregates } from "../../actions/aggregates_actions";
import Aggregates from "./aggregates";

const mSTP = (state) => {
    return {
        aggregates: state.entities.aggregates,
        // restaurantId: parseInt(Object.keys(state.entities.restaurants)[0])
        // passed through by line 106 in rest show
    };
};

const mDTP = (dispatch) => {
    return {
        getAggregates: (restaurantId) => dispatch(getAggregates(restaurantId)),
    };
};

export default connect(mSTP, mDTP)(Aggregates);