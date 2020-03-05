// pertains to the question answers association

// fetch all the answers for a particular question
export const fetchAllQuestionAnswers = questionId => (
    $.ajax({
        url: `/api/questions/${questionId}/answers`,
        method: 'GET'
    })
)

