import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_REVIEWS } from "../actions/reviews_actions";


const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });

        case RECEIVE_REVIEWS:
            return Object.assign({}, state, action.reviewers);

        default:
            return state;
    }

}

export default usersReducer;