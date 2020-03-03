import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import * as UserAction from './actions/user_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    // TESTING: BEGIN
    // window.store = store;
    // window.createUser = UserAction.createUser;
    // window.fetchUser = UserAction.fetchUser;
    // window.fetchAllUsers = UserAction.fetchAllUsers;
    // store.dispatch(fetchUser(2))
    // store.dispatch(fetchUser(1))
    // TESTING: END

    ReactDOM.render(<Root />, root);
})