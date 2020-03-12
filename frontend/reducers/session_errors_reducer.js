import { RECEIVE_SESSION_ERRORS, SIGN_IN_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";

export const sessionErrorsReducer = (prevState = null, action) => {
    Object.freeze(prevState);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors
        case SIGN_IN_USER:
            return null;
        case RECEIVE_USER:
            return null;
        default:
            return prevState;
    }
}

export default sessionErrorsReducer;