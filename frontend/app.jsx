import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/nav_bar/nav_bar';
import SessionContainer from './components/session/session_container';
import AskQuestion from './components/questions/ask_question';
import AskQuestionContainer from './components/questions/ask_question_container';



const App = () => {
    return (
        <div>
            <NavBar/>
            <AskQuestionContainer />
        </div>
    )
}

export default App;