import { PENDING_REVIEW } from "../actions/reviews_actions";

const reviewsPendingReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {


        case PENDING_REVIEW:
            
            return Object.assign({}, action.info);

    
        default:
            return state;
    }

}

export default reviewsPendingReducer;