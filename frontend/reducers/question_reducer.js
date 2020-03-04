import { RECEIVE_ALL_QUESTIONS, RECEIVE_QUESTION, REMOVE_QUESTION } from "../actions/question_action";

const questionReducer = (prevState = {}, action) => {
    Object.freeze({}, prevState);
    const newState = Object.assign({}, prevState);
    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS:
            return action.questions;
        case RECEIVE_QUESTION:
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