import * as CommentAPI from '../util/comment_util';

// constants
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";


// regular thunk creators
export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

export const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})

// thunk action creators
export const createComment = comment => dispatch => (
    CommentAPI.createComment(comment)
        .then(commentRes => dispatch(receiveComment(commentRes)))
)

export const showComments = answerId => dispatch => (
    CommentAPI.showComments(answerId)
        .then(comments => dispatch(receiveComments(comments)))
)

export const deleteComment = commentId => dispatch => (
    CommentAPI.removeComment(commentId)
        .then(comment => dispatch(removeComment(comment)))
)

export const editComment = (commentId, comment) => dispatch => (
    CommentAPI.editComment(commentId, comment)
        .then(commentRes => dispatch(receiveComment(commentRes)))
)