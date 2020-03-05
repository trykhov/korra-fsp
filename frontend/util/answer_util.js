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

// will do editting and deleting when front end is up