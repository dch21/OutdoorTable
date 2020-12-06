import * as ReservationAPIUtil from "../util/reservations";

export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";

export const RECEIVE_RESERVATION_ERRORS = 'RECEIVE_RESERVATION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';



const receiveReservations = reservations => {
    return {
        type: RECEIVE_RESERVATIONS,
        reservations
    };
};
const receiveReservation = reservation => {
    return {
        type: RECEIVE_RESERVATION,
        reservation
    };
};
const removeReservation = reservationId => {
    return {
        type: REMOVE_RESERVATION,
        reservationId
    };
};

export const receiveReservationErrors = (errors) => {
    return {
        type: RECEIVE_RESERVATION_ERRORS,
        errors
    };
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS,
    };
};

export const requestReservations = (userId) => dispatch => (
    ReservationAPIUtil.fetchReservations(userId)
        .then(reservations => dispatch(receiveReservations(reservations)))
);
// export const requestReservation = (reservationId) => dispatch => (
//     ReservationAPIUtil.fetchReservation(reservationId)
//         .then(reservation => dispatch(receiveReservation(reservation)))
// );
export const createReservation = (reservation) => dispatch => (
    ReservationAPIUtil.createReservation(reservation)
        .then(reservation => dispatch(receiveReservation(reservation)),
        errors => (dispatch(receiveReservationErrors(errors.responseJSON)))
));
// export const updateReservation = (reservation) => dispatch => (
//     ReservationAPIUtil.updateReservation(reservation)
//         .then(reservation => dispatch(receiveReservation(reservation)))
// );
export const deleteReservation = (reservationId) => dispatch => (
    ReservationAPIUtil.deleteReservation(reservationId)
        .then(() => dispatch(removeReservation(reservationId)))
);

export const PENDING_RESERVATION = "PENDING_RESERVATION";


const pendReservation = info => {
    return {
        type: PENDING_RESERVATION,
        info
    };
};

export const pendingReservation = (info) => dispatch(pendReservation(info));
