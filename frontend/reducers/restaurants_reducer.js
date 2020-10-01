import { RECEIVE_RESTAURANT, RECEIVE_SEARCH } from "../actions/restaurant_actions";

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_RESTAURANT:
            return Object.assign({}, state, { [action.restaurant.id]: action.restaurant });

        // case RECEIVE_SEARCH:
        //     return action.restaurants;

        default:
            return state;
    }

}

export default restaurantsReducer;