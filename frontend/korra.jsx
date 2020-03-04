import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import { fetchAllQuestions, fetchQuestion, askQuestion } from './util/question_util';
import { fetchAllUsers } from './actions/user_actions';
import { signOutUser } from './actions/session_actions';


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
    const question = {
        title: "Who is the best Avenger?",
        text: "Please say Spiderman"
    }
    window.askQuestion = askQuestion;
    window.fetchQuestion = fetchQuestion;
    window.fetchAllQuestions = fetchAllQuestions;
    window.signOutUser = signOutUser
    // TESTING: END

    ReactDOM.render(<Root store={store}/>, root);
})