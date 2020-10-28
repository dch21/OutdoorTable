export const fetchFavorites = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/favorites`
    });
};

export const deleteFavorite = (favoriteId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/favorites/${favoriteId}`,
    });
};

export const createFavorite = (favorite) => {
    return $.ajax({
        method: "POST",
        url: "/api/favorites",
        data: { favorite: favorite }
    });
};