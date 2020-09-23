import { RECEIVE_RESTAURANT } from "../actions/restaurant_actions";

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_RESTAURANT:
            return Object.assign({}, state, { [action.restaurant.id]: action.restaurant });

        default:
            return state;
    }

}

export default restaurantsReducer;