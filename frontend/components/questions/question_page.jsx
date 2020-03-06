import React from 'react';
import AnswerContainer from '../answers/answer_container';
import { fetchAllAnswers } from '../../util/answer_util';

class QuestionPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // remember to put a route for this
        const { fetchQuestion } = this.props;
        const questionId = this.props.match.params.questionId;
        // remplacing box shadow of nav bar
        const navBar = document.getElementById("main-nav-bar")
        navBar.style.boxShadow = "0 3px 2px -2px rgba(200,200,200,0.2)"
        const pageContainer = document.getElementById("page-container");
        pageContainer.classList.remove("disappear");
        // document.body.style.backgroundColor = "rgb(255, 255, 255)";
        // puts the question into the state
        fetchQuestion(questionId);
    }

    componentDidUpdate(prevProps) {
        const { fetchQuestion } = this.props;
        const questionId = this.props.match.params.questionId
        if(prevProps.match.params.questionId !== questionId) {
            fetchQuestion(questionId)
        }
    }


    render() {
        const { question, answers} = this.props;
        if(question === undefined) {
            return null;
        }
        return (
            <section className="question-answer-page">
                <div className="QA-container">
                    <h3>{question.title}</h3>
                    <div className="interact-options">
                        <div className="answer-follow-container">
                            <div className="interact-component">
                                <i className="far fa-edit"  color="#329bff"/>
                                <span>Answer</span>
                            </div>
                            <div className="interact-component">
                                <i className="fas fa-rss"/>
                                <span>Follow</span>
                            </div>
                            <div className="interact-component">
                                <i className="fas fa-people-carry"/>
                                <span>Request</span>
                            </div>
                        </div>
                        <div className="share-options">
                            {/* icons */}
                        </div>
                    </div>
                    <div id="num-answers">{answers.length} {answers.length > 1 ? "Answers" : "Answer"}</div>
                    <AnswerContainer questionId={question.id}/>
                </div>
                <div className="related-questions">

                </div>
            </section>
        )
    }
}

export default QuestionPage;