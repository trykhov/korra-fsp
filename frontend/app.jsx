import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/nav_bar/nav_bar';
import AskQuestionContainer from './components/questions/ask_question_container';
import QuestionPageContainer from './components/questions/question_page_container';


const App = () => {
    return (
        <div>
            <NavBar/>
            <AskQuestionContainer />
            <section id="page-container">   
                <Route path="/question/:questionId" component={QuestionPageContainer}/>
            </section>
        </div>
    )
}

export default App;