import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AnswersContainer from '../answers/to_questionpage/AnswersContainer';
import { fetchQuestion } from '../../util/question_util';
import AppContext from '../../contexts/AppContext';

function QuestionPage(props) {
    const { questionId } = props.match.params;
    const [question, setQuestion] = useState({title: "", id: questionId, user_id: ""});

    useEffect(() => {
        // replacing box shadow of nav bar
        const navBar = document.getElementById("main-nav-bar")
        navBar.style.boxShadow = "0 3px 2px -2px rgba(200,200,200,0.2)"
        document.body.style.backgroundColor = "rgb(255, 255, 255)";
        fetchQuestion(questionId)
            .then(question => setQuestion(question));
    }, [questionId])


    return (
        <section id="question-page-container">
            <div className="question-answer-page">
                <AppContext.Consumer>
                    {currentUser => <AnswersContainer question={question} currentUser={currentUser}/>}
                </AppContext.Consumer>
                <div id="related-q-container">
                    <div id="related-questions">
                        <h6>Related Questions</h6>
                        <div>
                            <Link to="/question/7" className="related-question">Where and why did Try learn how to code?</Link>
                            <Link to="/question/8" className="related-question">What are Try's experiences as a software engineer?</Link>
                            <Link to="/question/9" className="related-question">Where can I find Try's portfolio?</Link>
                            <Link to="/question/10" className="related-question">How can we best contact Try?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    )
}

export default QuestionPage;