import * as RestaurantAPIUtil from "../util/restaurants_api";

export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

const receiveRestaurant = restaurant => {
    return {
        type: RECEIVE_RESTAURANT,
        restaurant
    };
};
const receiveSearch = restaurants => {
    return {
        type: RECEIVE_SEARCH,
        restaurants
    };
};



export const getRestaurant = (restaurantId) => dispatch => (
    RestaurantAPIUtil.fetchRestaurant(restaurantId)
        .then(restaurant => dispatch(receiveRestaurant(restaurant)))
);

export const searchRestaurant = (searchTerms) => dispatch => (
    RestaurantAPIUtil.searchRestaurants(searchTerms)
        .then(restaurants => dispatch(receiveSearch(restaurants)))
);

