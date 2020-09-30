import { RECEIVE_REVIEWS, CLEAR_REVIEWS } from "../actions/reviews_actions";

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return Object.assign({}, state, action.reviews);
        case CLEAR_REVIEWS:
            return {};
        default:
            return state;
    }

}

export default reviewsReducer;