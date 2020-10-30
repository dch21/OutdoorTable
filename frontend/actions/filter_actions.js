export const ADD_FILTER = "ADD_FILTER";
export const DELETE_FILTER = "DELETE_FILTER";
export const RESET_FILTER = "RESET_FILTER";

export const addFilter = (filter) => {
    return {
        type: ADD_FILTER,
        filter
    };
};

export const deleteFilter = (filter) => {
    return {
        type: DELETE_FILTER,
        filter
    };
};

export const resetFilter = () => {
    return {
        type: RESET_FILTER,
    };
};

