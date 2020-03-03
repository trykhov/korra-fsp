import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import * as UserAction from './actions/user_actions';
import * as SessionAction from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState = undefined;
    // to tell the window that the user is logged in
    // (look at the application.html.erb in the app/views folder)
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }
    const store = configureStore(preloadedState);
    // TESTING: BEGIN
    window.store = store;
    window.signInUser = SessionAction.signInUser;
    window.signOutUser = SessionAction.signOutUser;
    // const example = {id: 1, username: "Peter Parker", email: "spiderman@avg.org", password: "tonystark"};
    // store.dispatch(signInUser(example))
    // window.createUser = UserAction.createUser;
    // store.dispatch(createUser(example));
    // window.fetchUser = UserAction.fetchUser;
    // window.fetchAllUsers = UserAction.fetchAllUsers;
    // store.dispatch(fetchUser(2))
    // store.dispatch(fetchUser(1))
    // TESTING: END

    ReactDOM.render(<Root store={store}/>, root);
})