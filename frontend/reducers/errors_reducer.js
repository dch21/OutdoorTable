import sessionErrorsReducer from "./session_errors_reducer";
import reservationErrorsReducer from "./reservation_errors_reducer";
import { combineReducers } from "redux";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    reservation: reservationErrorsReducer
});

export default errorsReducer; 

