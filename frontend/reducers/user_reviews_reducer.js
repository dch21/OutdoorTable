import { RECEIVE_REVIEWS, RECEIVE_THIRTY_DAYS_COUNT, PENDING_REVIEW, CLEAR_REVIEWS } from "../actions/reviews_actions";

const userReviewsReducer = (state = [], action) => {
    Object.freeze(state);
    
    switch (action.type) {
    
        case RECEIVE_THIRTY_DAYS_COUNT:
            return [action.count];
        default:
            return state;
    }

}

export default userReviewsReducer;