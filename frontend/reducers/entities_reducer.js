import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import questionReducer from "./question_reducer";

const entitiesReducer = combineReducers({
    users: userReducer,
    questions: questionReducer
    // questions
    // answers
    // comments
})

export default entitiesReducer;