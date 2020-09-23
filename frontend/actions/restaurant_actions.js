import * as RestaurantAPIUtil from "../util/restaurants_api";

export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";

const receiveRestaurant = restaurant => {

    return {
        type: RECEIVE_RESTAURANT,
        restaurant
    };

};

export const getRestaurant = (restaurantId) => dispatch => (
    RestaurantAPIUtil.fetchRestaurant(restaurantId)
        .then(restaurant => dispatch(receiveRestaurant(restaurant)))
);

