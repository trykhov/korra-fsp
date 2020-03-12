import * as SessionAPI from '../util/session_util';


// action constants
export const SIGN_IN_USER = "SIGN_IN_USER";
export const SIGN_OUT_USER = "SIGN_OUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

// regular action creators
export const receiveSession = user => ({
    type: SIGN_IN_USER,
    user
})

export const removeSession = () => ({
    type: SIGN_OUT_USER
})

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})


// thunk action creators
export const signInUser = user => dispatch => (
    SessionAPI.signInUser(user)
    .then(res => {
        if(res.errors) {
            return dispatch(receiveSessionErrors(res.errors))
        } else {
            return dispatch(receiveSession(res))
        }
    })
)

export const signOutUser = () => dispatch => (
    SessionAPI.signOutUser()
        .then(() => dispatch(removeSession()))
)