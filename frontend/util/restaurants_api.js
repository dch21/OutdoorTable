// export const fetchRestaurants = () => {
//     return $.ajax({
//         method: "GET",
//         url: "/api/restaurants"
//     });
// };

export const fetchRestaurant = (restaurantId) => {
    return $.ajax({
        method: "GET",
        url: `/api/restaurants/${restaurantId}`
    });
};

export const searchRestaurants = (searchTerms) => {
    return $.ajax({
        method: "GET",
        url: "/api/restaurants/search",
        data: { searchTerms: searchTerms}
    });
};