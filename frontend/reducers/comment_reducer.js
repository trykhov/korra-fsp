import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";

const commentReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    const newState = Object.assign({}, prevState);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments
        case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment;
            return newState;
        case REMOVE_COMMENT:
            newState[action.commentId] = undefined;
            return newState;
        default:
            return prevState;
    }
}

export default commentReducer;