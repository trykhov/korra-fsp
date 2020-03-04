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