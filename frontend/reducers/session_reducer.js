import { SIGN_OUT_USER, SIGN_IN_USER } from "../actions/session_actions";

const _nullSession = {id: null};

const sessionReducer = (prevState = _nullSession, action) => {
    Object.freeze(prevState);
    switch (action.type) {
        case SIGN_IN_USER:
            return Object.assign({}, {id: action.user.id});
        case SIGN_OUT_USER:
            return _nullSession;
        default:
            return prevState;
    }
}

export default sessionReducer;