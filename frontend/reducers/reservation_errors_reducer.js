import { RECEIVE_RESERVATION_ERRORS, CLEAR_ERRORS } from "../actions/reservations_actions";

const reservationErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        // case RECEIVE_CURRENT_USER:
        //     return [];

        case RECEIVE_RESERVATION_ERRORS:
            return action.errors;

        case CLEAR_ERRORS:
            return [];

        default:
            return state;
    }

};


export default reservationErrorsReducer;