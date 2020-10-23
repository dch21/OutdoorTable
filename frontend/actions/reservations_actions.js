import * as ReservationAPIUtil from "../util/reservations";

export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";


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



export const requestReservations = (userId) => dispatch => (
    ReservationAPIUtil.fetchReservations(userId)
        .then(reservations => dispatch(receiveReservations(reservations)))
);
export const requestReservation = (reservationId) => dispatch => (
    ReservationAPIUtil.fetchReservation(reservationId)
        .then(reservation => dispatch(receiveReservation(reservation)))
);
export const createReservation = (reservation) => dispatch => (
    ReservationAPIUtil.createReservation(reservation)
        .then(reservation => dispatch(receiveReservation(reservation)))
);
export const updateReservation = (reservation) => dispatch => (
    ReservationAPIUtil.updateReservation(reservation)
        .then(reservation => dispatch(receiveReservation(reservation)))
);
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

// export const receiveNumberBookings = (restaurantId) => dispatch => (
//     ReservationAPIUtil.fetchNumberReservations(restaurantId)
//         .then(numberBookings => dispatch(receiveTotalBookings(numberBookings)))
// );