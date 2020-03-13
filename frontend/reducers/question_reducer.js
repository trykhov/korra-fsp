import { RECEIVE_ALL_QUESTIONS, RECEIVE_QUESTION, REMOVE_QUESTION } from "../actions/question_actions";

const questionReducer = (prevState = {}, action) => {
    Object.freeze({}, prevState);
    let newState = Object.assign({}, prevState);
    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS:
            return action.questions;
        case RECEIVE_QUESTION:
            newState = {}; // allows only one question at a time
            newState[action.question.id] = action.question;
            return newState;
        case REMOVE_QUESTION:
            newState[action.questionId] = undefined;
            return newState;
        default:
            return prevState;
    }
}

export default questionReducer;