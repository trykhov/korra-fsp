export const createComment = (answerId, comment) => (
    $.ajax({
        url: `/api/answers/${answerId}/comments`,
        method: 'POST',
        data: {comment}
    })
)

export const showComments = answerId => (
    $.ajax({
        url: `/api/answers/${answerId}/comments`,
        method: 'GET'
    })
)

export const deleteComment = commentId => (
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
