import { RECEIVE_RESERVATIONS, RECEIVE_RESERVATION, REMOVE_RESERVATION} from '../actions/reservations_actions';

const reservationsReducer = (oldState = {}, action) => {

    switch (action.type) {
        case RECEIVE_RESERVATIONS:
            return Object.assign({}, action.reservations);

        case RECEIVE_RESERVATION:
            return Object.assign({}, oldState, { [action.reservation.id]: action.reservation });
        
        case REMOVE_RESERVATION:
            let nextState = Object.assign({}, oldState);
            delete next[action.reservationId];
            return nextState;

        default:
            return oldState;
    }

};


export default reservationsReducer;