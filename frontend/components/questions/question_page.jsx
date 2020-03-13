import React from 'react';
import AnswerContainer from '../answers/answer_container';
import PostAnswerContainer from '../answers/post_answer_container';

class QuestionPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            question: '',
            clickAnswer: false
        }
    }

    answerQuestion() {
        const writeAnswer = document.getElementById("write-answer");
        writeAnswer.classList.remove("disappear");
    }
    

    componentDidMount() {
        // remember to put a route for this
        const { fetchQuestion } = this.props;
        const questionId = this.props.match.params.questionId;
        // remplacing box shadow of nav bar
        const navBar = document.getElementById("main-nav-bar")
        navBar.style.boxShadow = "0 3px 2px -2px rgba(200,200,200,0.2)"
        // document.body.style.backgroundColor = "rgb(255, 255, 255)";
        // puts the question into the state
        fetchQuestion(questionId)
        // this.setState({question: this.props.question})
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
        const numAnswers = Object.keys(answers).length;
        if(question === undefined) {
            return null;
        }
        return (
            <section id="question-page-container">
                <div className="question-answer-page">
                    <div className="QA-container">
                        <h3>{question.title}</h3>
                        <div className="interact-options">
                            <div className="answer-follow-container">
                                <div className="interact-component answer-button" onClick={this.answerQuestion}>
                                    <i className="far fa-edit" color="#329bff"/>
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
                        <section id="write-answer" className="disappear">
                            <PostAnswerContainer questionId={question.id} currentUser={window.currentUser}/>
                        </section>
                        <div id="num-answers">{numAnswers} {numAnswers > 1 ? "Answers" : (numAnswers === 1) ? "Answer" : "No answers"}</div>
                        <AnswerContainer questionId={question.id}/>
                    </div>
                    <div id="related-q-container">
                        <div id="related-questions">
                            <h6>Related Questions</h6>
                            <div>
                                <div>Pick one: Tacos or burritos?</div>
                                <div>Is mayonnaise an instrument?</div>
                                <div>What language should I learn after JavaScript?</div>
                                <div>Where is Waldo?</div>
                                <div>What should I eat tonight?</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default QuestionPage;