import { RECEIVE_RESERVATIONS, REMOVE_RESERVATION, PENDING_RESERVATION} from '../actions/reservations_actions';

const userReservationsReducer = (oldState = {}, action) => {

    switch (action.type) {
        case RECEIVE_RESERVATIONS:
            return Object.assign({}, action.reservations);

     
        case REMOVE_RESERVATION:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.reservationId];
            return nextState;


        default:
            return oldState;
    }

};


export default userReservationsReducer;