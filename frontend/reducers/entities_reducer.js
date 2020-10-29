import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import restaurantsReducer from "./restaurants_reducer";
import reservationsReducer from "./reservations_reducer";
import reviewsReducer from "./reviews_reducer";
import aggregatesReducer from "./aggregates_reducer";
import searchReducer from "./search_reducer";
// import hoursReducer from "./hours_reducer";
import userReservations from "./user_reservations_reducer";
import favoritesReducer from "./favorites_reducer";
import userReviewsReducer from "./user_reviews_reducer";



const entitiesReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantsReducer,
    reservations: reservationsReducer,
    reviews: reviewsReducer,
    aggregates: aggregatesReducer,
    searchResults: searchReducer,
    userReservations: userReservations,
    favorites: favoritesReducer,
    userReviews: userReviewsReducer
    // hours: hoursReducer

});

export default entitiesReducer; 