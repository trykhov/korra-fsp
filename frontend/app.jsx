import React from 'react';
import NavBar from './components/nav_bar/nav_bar';
import EntryForm from './components/session/entry_form';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';


const App = () => {
    return (
        <EntryForm />
        // <HashRouter>
        // <NavBar/>
        //     <Route path="/login" component={}/>
        // </HashRouter>
    )
}

export default App;