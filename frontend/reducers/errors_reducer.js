import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import { userErrorsReducer } from "./user_errors_reducer";


const errorsReducer = combineReducers({
    login: userErrorsReducer,
    session: sessionErrorsReducer
})

export default errorsReducer;