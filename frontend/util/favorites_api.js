export const fetchFavorites = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/favorites`
    });
};

export const deleteFavorite = (reservationId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/reservations/${reservationId}`,
    });
};