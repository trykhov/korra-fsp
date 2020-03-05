import * as AnswerAPI from '../util/answer_util';

// action constants
export const RECEIVE_ANSWER = "RECEIVE_ANSWERS";
export const RECEIVE_ALL_ANSWERS = "RECEIVE_ALL_ANSWERS";
export const REMOVE_ANSWER = "REMOVE_ANSWER";

// regular action creators
export const receiveAnswer = answer => ({
    type: RECEIVE_ANSWER,
    answer 
})
 
export const receiveAllAnswers = answers => ({
    type: RECEIVE_ALL_ANSWERS,
    answers
})

export const removeAnswer = answerId => ({
    type: REMOVE_ANSWER,
    answerId
})


// thunk action creators
export const postAnswer = answer => dispatch => (
    AnswerAPI.postAnswer(answer)
        .then(answer => dispatch(receiveAnswer(answer)))
)

export const fetchAnswer = answerId => dispatch => (
    AnswerAPI.fetchAnswer(answerId)
        .then(answer => dispatch(receiveAnswer(answer)))
)

export const fetchAllAnswers = () => dispatch => (
    AnswerAPI.fetchAllAnswers()
        .then(answers => dispatch(receiveAllAnswers(answers)))
)
