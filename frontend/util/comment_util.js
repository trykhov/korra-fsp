export const createComment = comment => (
    $.ajax({
        url: `/api/comments`,
        method: 'POST',
        data: {comment}
    })
)

export const fetchAnswerComments = (answerId) => (
    $.ajax({
        url: `/api/answers/${answerId}/comments`,
        method: 'GET'
    })
)

export const fetchComments = questionId => (
    $.ajax({
        url: `/api/questions/${questionId}/comments`,
        method: 'GET'
    })
)

export const removeComment = commentId => (
    $.ajax({
        url: `/api/comments/${commentId}`,
        method: 'DELETE'
    })
)

export const editComment = (commentId, comment) => (
    $.ajax({
        url: `/api/comments/${commentId}`,
        method: 'PATCH',
        data: { comment }
    })
)
