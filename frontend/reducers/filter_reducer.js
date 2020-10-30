import { ADD_FILTER, DELETE_FILTER, RESET_FILTER } from "../actions/filter_actions";

const defaultState = {price: [], cuisine: [], boro: []}

const filterReducer = (state = defaultState, action) => {
    
    Object.freeze(state);
    switch (action.type) {
        // case ADD_FILTER:
        //     let newState = state.slice();
        //     newState.push(action.filter);
        //     return newState;
        case ADD_FILTER:
            let newState = state;
            if (Object.keys(action.filter)[0] === "price") {
                newState.price.push(action.filter.price);
            } else if (Object.keys(action.filter)[0] === "boro") {
                newState.boro.push(action.filter.boro);
            } else {
                newState.cuisine.push(action.filter.cuisine);
            }
            return newState;
        // case DELETE_FILTER:
        //     let newerState = state.slice();
        //     const ind = newerState.indexOf(action.filter);
        //     newerState.splice(ind, 1);
        //     return newerState;
        case DELETE_FILTER:
            let newerState = state;

            if (Object.keys(action.filter)[0] === "price") {
                const arr = newerState.price;
                const ind = arr.indexOf(action.filter.price);
                arr.splice(ind, 1);
            } else if (Object.keys(action.filter)[0] === "boro") {
                const arr = newerState.boro;
                const ind = arr.indexOf(action.filter.boro);
                arr.splice(ind, 1);
            } else {
                const arr = newerState.cuisine;
                const ind = arr.indexOf(action.filter.cuisine);
                arr.splice(ind, 1);            
            }
            return newerState;

        case RESET_FILTER:
            return defaultState;

        default:
            return defaultState;
    }

};

export default filterReducer;