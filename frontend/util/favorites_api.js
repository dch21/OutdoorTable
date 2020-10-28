
export const fetchFavorites = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/favorites`
    });
};