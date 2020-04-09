import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/nav_bar/nav_bar';
import AskQuestionContainer from './components/questions/ask_question_container';
import QuestionPageContainer from './components/questions/question_page_container';
import HomepageContainer from './components/homepage/homepage_container';
import { signOutUser } from './actions/session_actions';
import _404Page from './components/_404_page/_404_page';

class App extends React.Component {

    componentWillUnmount() {
        signOutUser();
    }

    render() {
        return (
            <div id="app-container" className="night-mode">
                <NavBar/>
                <AskQuestionContainer />
                <Route exact path="/" component={HomepageContainer} />
                {/* <section className="page-container disappear">    */}
                <Route path="/question/:questionId" component={QuestionPageContainer}/>
                <Route path="*" component={_404Page} />
                {/* </section> */}
            </div>
        )
    }
}

export default App;