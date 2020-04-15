import * as UserAPI from '../util/user_util';
import { receiveSession } from './session_actions';
// action constants
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const REMOVE_USER = "REMOVE_USER";
export const RECEIVE_USER_ERROR = "RECEIVE_USER_ERROR";

// regular action creators
export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})

export const removeUser = userId => ({
    type: REMOVE_USER,
    userId
})

export const receiveUserError = errors => ({
    type: RECEIVE_USER_ERROR,
    errors
})


// thunk action creators


export const fetchUser = userId => dispatch => (
    UserAPI.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
)

export const fetchAllUsers = () => dispatch => (
    UserAPI.fetchAllUsers()
        .then(users => dispatch(receiveAllUsers(users)))
)

export const createUser = user => dispatch => (
    UserAPI.createUser(user)
        .then(res => {
            if(res.errors) {
                dispatch(receiveUserError(res.errors))
            } else {
                dispatch(receiveSession(res))
            }
        }
        )
)



export const updateUser = user => dispatch => (
    UserAPI.updateUser(user)
        .then(resUser => dispatch(receiveUser(resUser)))
)

export const deleteUser = userId => dispatch => (
    UserAPI.deleteUser(userId)
        .then(() => dispatch(removeUser(userId)))
)