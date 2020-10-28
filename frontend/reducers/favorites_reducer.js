import { RECEIVE_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE} from '../actions/favorites_actions';

const favoritesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {

        case RECEIVE_FAVORITES:
            return action.favorites;

        case RECEIVE_FAVORITE:
            return Object.assign({}, state, action.favorite );
        
        case REMOVE_FAVORITE:
            let nextState = Object.assign({}, state);
            delete nextState[action.favoriteId];
            return nextState;

   
        default:
            return state;
    }

};


export default favoritesReducer;