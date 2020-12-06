import { RECEIVE_RESERVATIONS, REMOVE_RESERVATION, PENDING_RESERVATION} from '../actions/reservations_actions';

const reservationsReducer = (oldState = {}, action) => {

    switch (action.type) {

        case PENDING_RESERVATION:
            return action.info;

        default:
            return oldState;
    }

};


export default reservationsReducer;