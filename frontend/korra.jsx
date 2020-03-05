import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import { postAnswer, fetchAllAnswers, fetchAnswer } from './util/answer_util';





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
    window.postAnswer = postAnswer;
    window.fetchAnswer = fetchAnswer;
    window.fetchAllAnswers = fetchAllAnswers;
    // TESTING: END

    ReactDOM.render(<Root store={store}/>, root);
})