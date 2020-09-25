import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

import { postUser, postSession, deleteSession } from "./util/session_api";
import { fetchRestaurant, searchRestaurants} from "./util/restaurants_api";
import { fetchReviews } from "./util/reviews_api";


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
    // window.searchRestaurants = searchRestaurants;
    // window.fetchRestaurant = fetchRestaurant;
    // window.postSession = postSession;
    // window.postUser = postUser;
    // window.deleteSession = deleteSession;


    ReactDOM.render(<Root store={store}/>, root);
});

