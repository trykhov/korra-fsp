import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUser)
})

// these are the props passed into Auth
// only allow the user to sign in if they're not logged in
const Auth = ({loggedIn, path, component: Component}) => (
    // returns a Route component
    <Route 
        path={path}
        render={props => loggedIn ? <Redirect to="/"/> : <Component {...props} />}
    />
)

// only allow the user to access the feed if they're signed in
const Protected = ({loggedIn, path, component: Component}) => (
    <Route
        path={path}
        render={props => loggedIn ? <Component {...props}/> : <Redirect to="/login"/>}
    />
)

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
