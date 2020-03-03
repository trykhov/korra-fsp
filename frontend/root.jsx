import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import App from './app';
import SessionContainer from './components/session/session_container';
import NavBar from './components/nav_bar/nav_bar';
import { ProtectedRoute, AuthRoute } from './util/route_util';


const Root = ({store}) => (
    <Provider store={store}>
        <HashRouter>
            <AuthRoute path="/login" component={SessionContainer}/>
            <ProtectedRoute path="/" component={App} />
        </HashRouter>
    </Provider>
)

export default Root;