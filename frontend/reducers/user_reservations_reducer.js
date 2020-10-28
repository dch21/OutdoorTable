import { RECEIVE_RESERVATIONS, REMOVE_RESERVATION, PENDING_RESERVATION} from '../actions/reservations_actions';

const userReservationsReducer = (oldState = {}, action) => {

    switch (action.type) {
        case RECEIVE_RESERVATIONS:
            return Object.assign({}, action.reservations);

        // case RECEIVE_RESERVATION:
        //     return Object.assign({}, oldState, { [action.reservation.id]: action.reservation });
        
        // case REMOVE_RESERVATION:
        //     let nextState = Object.assign({}, oldState);
        //     delete next[action.reservationId];
        //     return nextState;
        case REMOVE_RESERVATION:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.reservationId];
            return nextState;

        // case PENDING_RESERVATION:
        //     return action.info;

        default:
            return oldState;
    }

};


export default userReservationsReducer;