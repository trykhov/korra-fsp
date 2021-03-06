import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import SessionContainer from './components/session/session_container';
import { ProtectedRoute, AuthRoute } from './util/route_util';
import _404Page from './components/_404_page/_404_page';



const Root = ({store}) => {

    return (
        <Provider store={store}>
            <HashRouter>
                <AuthRoute path="/login" component={SessionContainer}/>
                <ProtectedRoute path="/" component={App} />
            </HashRouter>
        </Provider>
    )
}

export default Root;


