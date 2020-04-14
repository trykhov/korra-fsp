export const askQuestion = question => (
    $.ajax({
        url: '/api/questions',
        method: 'POST',
        data: { question }
    })
)

export const fetchQuestion = questionId => (
    $.ajax({
        url: `/api/questions/${questionId}`,
        method: 'GET'
    })
)

export const fetchAllQuestions = () => (
    $.ajax({
        url: '/api/questions',
        method: 'GET'
    })
)

// get questions asked by a specific user
export const fetchUserQuestions = userId => (
    $.ajax({
        url: `/api/users/${userId}/questions`,
        method: 'GET'
    })
)