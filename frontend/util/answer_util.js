export const postAnswer = answer => (
    $.ajax({
        url: '/api/answers',
        method: 'POST',
        data: { answer }
    })
)

export const fetchAnswer = answerId => (
    $.ajax({
        url: `/api/answers/${answerId}`,
        method: 'GET'
    })
)

export const fetchAllAnswers = () => (
    $.ajax({
        url: '/api/answers',
        method: 'GET'
    })
)

export const editAnswer = (answerID, answer) => (
    $.ajax({
        url: `/api/answers/${answerID}`,
        method: 'PATCH',
        data: { answer }
    })
)

export const deleteAnswer = answerID => (
    $.ajax({
        url: `/api/answers/${answerID}`,
        method: 'DELETE'
    })
)

// will not have an action creator thunk
// use to allow user to edit or delete an answer
export const fetchAnswerFromUser = (questionID, userID) => (
    $.ajax({
        url: `/api/questions/${questionID}/users/${userID}/answers/:id`,
        method: 'GET'
    })
)

export const fetchUserAnswers = userId => (
    $.ajax({
        url: `/api/users/${userId}/answers`,
        method: 'GET'
    })
)