import { RECEIVE_SEARCH } from "../actions/restaurant_actions";

const searchReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {

        case RECEIVE_SEARCH:
            return action.restaurants;

        default:
            return state;
    }

}

export default searchReducer;