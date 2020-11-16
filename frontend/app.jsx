import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/nav_bar/nav_bar';
import AskQuestionContainer from './components/questions/ask_question_container';
import QuestionPageContainer from './components/questions/question_page_container';
import HomepageContainer from './components/homepage/homepage_container';
import { signOutUser } from './actions/session_actions';
import _404Page from './components/_404_page/_404_page';
import UserProfileContainer from './components/profile/user_profile_container';

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
                <Route exact path="/" component={HomepageContainer} />
                <Route path="/question/:questionId" component={QuestionPageContainer}/>
                <Route path="/user/:userId" component={UserProfileContainer} />
                <Route path="*" component={_404Page} />
            </div>
        </AppContext.Provider>
    )
}



export default App;