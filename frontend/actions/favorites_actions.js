import * as FavoriteAPIUtil from "../util/favorites_api";

export const RECEIVE_FAVORITES = "RECEIVE_FAVORITES";
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";


const receiveFavorites = favorites => {
    return {
        type: RECEIVE_FAVORITES,
        favorites
    };
};
const receiveFavorite = favorite => {
    return {
        type: RECEIVE_FAVORITE,
        favorite
    };
};
const removeFavorite = favoriteId => {
    return {
        type: REMOVE_FAVORITE,
        favoriteId
    };
};


export const requestFavorites = (userId) => dispatch => (
    FavoriteAPIUtil.fetchFavorites(userId)
        .then(favorites => dispatch(receiveFavorites(favorites)))
);

export const createFavorite = (info) => dispatch => (
    FavoriteAPIUtil.createFavorite(info)
        .then(favorite => dispatch(receiveFavorite(favorite)))
);

export const deleteFavorite = (favoriteId) => dispatch => (
    FavoriteAPIUtil.deleteFavorite(favoriteId)
        .then(() => dispatch(removeFavorite(favoriteId)))
);
