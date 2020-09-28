import { RECEIVE_AGGREGATES } from '../actions/aggregates_actions';

const aggregatesReducer = (oldState = [], action) => {

    switch (action.type) {
        case RECEIVE_AGGREGATES:
            return action.aggregates;
        default:
            return oldState;
    }

};


export default aggregatesReducer;