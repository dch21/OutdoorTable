import React from "react";
import { connect } from "react-redux";
import FavoritesPage from "./favorites_page";
import { requestFavorites, deleteFavorite } from "../../actions/favorites_actions";


const mSTP = (state) => {
    return {
        userId: state.session.id,
        userFirstName: state.entities.users[state.session.id].first_name,
        favorites: Object.values(state.entities.favorites)
    };
};
 
const mDTP = (dispatch) => {
    return {
        requestFavorites: (userId) => dispatch(requestFavorites(userId)),
        deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favoriteId))
    };
};

export default connect(mSTP, mDTP)(FavoritesPage);