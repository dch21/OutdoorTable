import * as AggregatesAPIUtil from "../util/aggregates_api";

export const RECEIVE_AGGREGATES = "RECEIVE_AGGREGATES";

const receiveAggregates = aggregates => {
    return {
        type: RECEIVE_AGGREGATES,
        aggregates
    };
};

export const getAggregates = (restId) => dispatch => (
    AggregatesAPIUtil.fetchAggregates(restId)
        .then(aggregates => dispatch(receiveAggregates(aggregates)))
);