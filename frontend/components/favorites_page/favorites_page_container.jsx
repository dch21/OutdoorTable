import React from "react";
import { connect } from "react-redux";
import FavoritesPage from "./favorites_page";
import { requestFavorites } from "../../actions/favorites_actions";


const mSTP = (state) => {
    return {
        userId: state.session.id,
        favorites: Object.values(state.entities.favorites)
    };
};
 
const mDTP = (dispatch) => {
    return {
        requestFavorites: (userId) => dispatch(requestFavorites(userId)),
        // deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId))
    };
};

export default connect(mSTP, mDTP)(FavoritesPage);