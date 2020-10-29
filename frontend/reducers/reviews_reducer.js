import { RECEIVE_REVIEWS, RECEIVE_THIRTY_DAYS_COUNT, PENDING_REVIEW, CLEAR_REVIEWS } from "../actions/reviews_actions";

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
    
        case RECEIVE_REVIEWS:
            return Object.assign({}, state, action.reviews);
        case CLEAR_REVIEWS:
            return {};

        // case PENDING_REVIEW:
            
        //     return Object.assign({}, action.info);

    
        default:
            return state;
    }

}

export default reviewsReducer;