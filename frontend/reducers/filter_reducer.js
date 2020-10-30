import { ADD_FILTER, DELETE_FILTER, RESET_FILTER } from "../actions/filter_actions";


const filterReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case ADD_FILTER:
            let newState = state.slice();
            newState.push(action.filter);
            return newState;
           
        case DELETE_FILTER:
            let newerState = state.slice();
            const ind = newerState.indexOf(action.filter);
            newerState.splice(ind, 1);
            return newerState;

        case RESET_FILTER:
            return [];

        default:
            return state;
    }

};

export default filterReducer;