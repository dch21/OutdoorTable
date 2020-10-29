import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

import { postUser, postSession, deleteSession } from "./util/session_api";
import { fetchRestaurant, searchRestaurants} from "./util/restaurants_api";
import { fetchReviews, checkReview, createReview} from "./util/reviews_api";
import { fetchAggregates } from "./util/aggregates_api";
import { searchHours } from "./util/hours_api";
import { fetchReservations,createReservation } from "./util/reservations";
import { fetchFavorites } from "./util/favorites_api";
import { createFavorite, deleteFavorite } from "./util/favorites_api";

// import { fetchNumberReservations } from "./util/reservations";





document.addEventListener('DOMContentLoaded', () => {
    
    const root = document.getElementById('root');

    let store;
    if (window.currentUser) {

        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            },
            session: {
                id: window.currentUser.id
            }
        };

        store = configureStore(preloadedState);
        delete window.currentUser;
        } 
        
        else {
            store = configureStore();
        }

    // Testing
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.fetchReviews = fetchReviews;
    window.fetchAggregates = fetchAggregates;
    window.searchRestaurants = searchRestaurants;
    // window.fetchRestaurant = fetchRestaurant;
    // window.fetchNumberReservations = fetchNumberReservations;
    window.postSession = postSession;
    // window.postUser = postUser;
    window.searchHours = searchHours;
    window.fetchReservations = fetchReservations;
    window.checkReview = checkReview;
    window.fetchFavorites = fetchFavorites;
    window.createFavorite = createFavorite;
    window.createReservation = createReservation;
    window.createReview = createReview;
    // window.deleteSession = deleteSession;


    ReactDOM.render(<Root store={store}/>, root);
});

// test session
// const user = {
//     email: "test1@test.com",
//     password: "testing",
// }