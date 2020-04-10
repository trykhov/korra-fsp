import { RECEIVE_ANSWER, RECEIVE_ALL_ANSWERS, REMOVE_ANSWER } from "../actions/answer_actions";


const answerReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    const newState = Object.assign({}, prevState);
    switch (action.type) {
        case RECEIVE_ALL_ANSWERS:
            return action.answers;
        case RECEIVE_ANSWER:
            newState[action.answer.id] = action.answer;
            return newState;
        case REMOVE_ANSWER:
            console.log(action)
            newState[action.answerId] = undefined;
            return newState;
        default:
            return prevState;
    }
}

export default answerReducer;