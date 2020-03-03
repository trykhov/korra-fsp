import { RECEIVE_ALL_USERS, RECEIVE_USER, REMOVE_USER } from "../actions/user_actions";

const userReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    const newState = Object.assign({}, prevState);
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return action.users
        case RECEIVE_USER:
            newState[action.user.id] = action.user;
            return newState;
        case REMOVE_USER:
            newState[action.userId] = undefined;
            return newState
        default:
            return prevState;
    }
}

export default userReducer;