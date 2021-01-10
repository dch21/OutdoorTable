import { RECEIVE_RESTAURANT, RECEIVE_SEARCH, RESET_RESTAURANT } from "../actions/restaurant_actions";

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_RESTAURANT:
            return Object.assign({}, state, { [action.restaurant.id]: action.restaurant });

        case RESET_RESTAURANT:
            return {};    

        default:
            return state;
    }

}

export default restaurantsReducer;