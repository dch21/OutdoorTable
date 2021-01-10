import React from "react";
import { connect } from "react-redux";
import { getRestaurant, resetRestaurants } from "../../actions/restaurant_actions";
import { getAggregates } from "../../actions/aggregates_actions";
import { createFavorite, deleteFavorite, requestFavorites } from "../../actions/favorites_actions";
import RestaurantShow from "./restaurant_show";
//
import { getReviews, clearReviews } from "../../actions/reviews_actions";
//

const mSTP = (state, ownProps) => {
    const restaurantId = ownProps.match.params.restaurantId;
    return {
        restaurant: state.entities.restaurants[restaurantId],
        restaurantId: restaurantId,
        aggregates: state.entities.aggregates,
        reviews: Object.values(state.entities.reviews),
        reviewers: state.entities.users,
        userId: state.session.id || null,
        // favorite: Object.keys(state.entities.favorites)[0] || null
        favorite: Object.values(state.entities.favorites)|| null
    };
    
};

const mDTP = (dispatch) => {
    return {
        getRestaurant: (restaurantId) => dispatch(getRestaurant(restaurantId)),
        getAggregates: (restaurantId) => dispatch(getAggregates(restaurantId)),
        getReviews: (restaurantId) => dispatch(getReviews(restaurantId)),
        clearReviews: () => dispatch(clearReviews()),
        createFavorite: (favorite) => dispatch(createFavorite(favorite)),
        deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favoriteId)),
        requestFavorites: (userId) => dispatch(requestFavorites(userId)),
        resetRestaurants: () =>dispatch(resetRestaurants()),
    };
};

export default connect(mSTP, mDTP)(RestaurantShow);