import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/nav_bar/nav_bar';
import AskQuestionContainer from './components/questions/ask_question_container';
import QuestionPage from './components/questions/QuestionPage';
import HomePage from './components/homepage/HomePage';
import { signOutUser } from './actions/session_actions';
import _404Page from './components/_404_page/_404_page';
import UserProfile from './components/profile/UserProfile'
import AppContext from './contexts/AppContext';

const App = () => {
    
    const { session } = store.getState();
    const { currentUser } = session;

    useEffect(() => {
        signOutUser();
    }) 

    return (
        <AppContext.Provider value={currentUser} >
            <div id="app-container" className="night-mode">
                <NavBar/>
                <AskQuestionContainer />
                <Route exact path="/" component={HomePage} />
                <Route path="/question/:questionId" component={QuestionPage}/>
                <Route path="/user/:userId" component={UserProfile} />
                <Route path="*" component={_404Page} />
            </div>
        </AppContext.Provider>
    )
}



export default App;