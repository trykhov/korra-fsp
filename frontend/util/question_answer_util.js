// pertains to the question answers association

// fetch all the answers for a particular question
export const fetchAllQuestionAnswers = questionId => (
    $.ajax({
        url: `/api/questions/${questionId}/answers`,
        method: 'GET'
    })
)

// will populate the state with the users that responded
// allows use to extract who answered the question
export const fetchAllAnswerers = questionId => (
    $.ajax({
        url: `/api/questions/${questionId}/users`,
        method: 'GET'
    })
)
