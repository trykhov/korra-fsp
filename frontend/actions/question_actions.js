import * as QuestionAPI from '../util/question_util';

// action constants
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const RECEIVE_ALL_QUESTIONS = "RECEIVE_ALL_QUESTIONS";
export const REMOVE_QUESTION = "REMOVE_QUESTION";

// regular action creators
export const receiveQuestion = question => ({
    type: RECEIVE_QUESTION,
    question
})

export const receiveAllQuestions = questions => ({
    type: RECEIVE_ALL_QUESTIONS,
    questions
})

export const removeQuestion = questionId => ({
    type: REMOVE_QUESTION,
    questionId
})

// thunk action
export const askQuestion = question => dispatch => (
    QuestionAPI.askQuestion(question)
        .then(question => dispatch(receiveQuestion(question)))
)

export const fetchQuestion = questionId => dispatch => (
    QuestionAPI.fetchQuestion(questionId)
        .then(question => dispatch(receiveQuestion(question)))
)

export const fetchAllQuestions = () => dispatch => (
    QuestionAPI.fetchAllQuestions()
        .then(questions => dispatch(receiveAllQuestions(questions)))
)

export const fetchUserQuestions = userId => dispatch => (
    QuestionAPI.fetchUserQuestions(userId)
        .then(questions => dispatch(receiveAllQuestions(questions)))
)