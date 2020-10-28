import { RECEIVE_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE} from '../actions/favorites_actions';

const favoritesReducer = (oldState = {}, action) => {

    switch (action.type) {

        case RECEIVE_FAVORITES:
            return action.favorites;

        // case RECEIVE_RESERVATION:
        //     return Object.assign({}, oldState, { [action.reservation.id]: action.reservation });
        
        case REMOVE_FAVORITE:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.favoriteId];
            return nextState;

   
        default:
            return oldState;
    }

};


export default favoritesReducer;