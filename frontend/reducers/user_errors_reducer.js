import { RECEIVE_USER_ERROR, RECEIVE_USER } from "../actions/user_actions";
import { SIGN_IN_USER } from "../actions/session_actions";

export const userErrorsReducer = (prevState = null, action) => {
    switch (action.type) {
        case RECEIVE_USER_ERROR:
            return action.errors;
        case RECEIVE_USER:
            return null;
        case SIGN_IN_USER:
            return null;
        default:
            return prevState;
    }
}

export default userErrorsReducer;