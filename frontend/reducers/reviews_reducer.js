import { RECEIVE_REVIEWS, RECEIVE_THIRTY_DAYS_COUNT } from "../actions/reviews_actions";

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return Object.assign({}, state, action.reviews);
        // case CLEAR_REVIEWS:
        //     return {};
        case RECEIVE_THIRTY_DAYS_COUNT:
            return [action.count];
        default:
            return state;
    }

}

export default reviewsReducer;