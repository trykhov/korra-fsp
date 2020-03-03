import { combineReducers } from "redux";
import userReducer from "./user_reducer";

const entitiesReducer = combineReducers({
    users: userReducer
    // questions
    // answers
    // comments
})

export default entitiesReducer;