import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/nav_bar/nav_bar';
import AskQuestionContainer from './components/questions/ask_question_container';
import QuestionPageContainer from './components/questions/question_page_container';
import HomepageContainer from './components/homepage/homepage_container';

const App = () => {
        return (
            <div id="app-container">
                <NavBar/>
                <AskQuestionContainer />
                <Route exact path="/" component={HomepageContainer} />
                {/* <section className="page-container disappear">    */}
                <Route path="/question/:questionId" component={QuestionPageContainer}/>
                {/* </section> */}
            </div>
        )
}

export default App;