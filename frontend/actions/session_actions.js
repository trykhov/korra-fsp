import * as SessionAPI from '../util/session_util';


// action constants
export const SIGN_IN_USER = "SIGN_IN_USER";
export const SIGN_OUT_USER = "SIGN_OUT_USER";

// regular action creators
export const receiveSession = user => ({
    type: SIGN_IN_USER,
    user
})

export const removeSession = () => ({
    type: SIGN_OUT_USER
})


// thunk action creators
export const signInUser = user => dispatch => (
    SessionAPI.signInUser(user)
        .then(userRes => dispatch(receiveSession(userRes)))
)

export const signOutUser = () => dispatch => (
    SessionAPI.signOutUser()
        .then(() => dispatch(removeSession()))
)