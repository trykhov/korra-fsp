import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import { createComment, deleteComment, editComment, showComments } from './util/comment_util';





document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState = undefined;
    // to tell the window that the user is logged in
    // (look at the application.html.erb in the app/views folder)
    let store;
    if (window.currentUser) {
        preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser },
            },
            session: {
                currentUser: window.currentUser
            }
        }
        store = configureStore(preloadedState);
        delete window.currentUser; // delete currentUser from the window, but kept in state
    } else {
        store = configureStore();
    }
    // TESTING: BEGIN
    // TESTING: END

    // removes the modals when user clicks out of it
    document.addEventListener("click", () => {
        const modals = document.getElementsByClassName("modal");
        for(let i of modals) {
            i.classList.add("disappear");
        }
    })
    ReactDOM.render(<Root store={store}/>, root);
})