import * as UserAPI from '../util/user_util';

// action constants
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const REMOVE_USER = "REMOVE_USER";

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
        .then(resUser => dispatch(receiveUser(resUser)))
)

export const updateUser = user => dispatch => (
    UserAPI.updateUser(user)
        .then(resUser => dispatch(receiveUser(resUser)))
)

export const deleteUser = userId => dispatch => (
    UserAPI.deleteUser(userId)
        .then(() => dispatch(removeUser(userId)))
)