

export const fetchReservations = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/reservations`
    });
};



export const createReservation = (reservation) => {
    return $.ajax({
        method: "POST",
        url: "/api/reservations",
        data: { reservation: reservation }
    });
};


export const deleteReservation = (reservationId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/reservations/${reservationId}`,
    });
};