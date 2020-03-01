import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import { fetchUser, fetchAllUsers } from './util/user_util';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    // TESTING: BEGIN

    // TESTING: END

    ReactDOM.render(<Root />, root);
})