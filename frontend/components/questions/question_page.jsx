import React from 'react';
import AnswerContainer from '../answers/to_questionpage/answer_container';
import PostAnswerContainer from '../answers/post_answer_container';
import { Link } from 'react-router-dom';
import { createUser } from '../../util/user_util';

class QuestionPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            alreadyAnswered: false,
            answerID: null
        }
    }

    answerQuestion() {
        const writeAnswer = document.getElementById("write-answer");
        writeAnswer.classList.remove("disappear");
    }
    

    componentDidMount() {
        // remember to put a route for this
        const { fetchQuestion, fetchAnswerFromUser, currentUserId } = this.props;
        const questionId = this.props.match.params.questionId;
        // remplacing box shadow of nav bar
        const navBar = document.getElementById("main-nav-bar")
        navBar.style.boxShadow = "0 3px 2px -2px rgba(200,200,200,0.2)"
        // document.body.style.backgroundColor = "rgb(255, 255, 255)";
        // puts the question into the state
        fetchQuestion(questionId)
        fetchAnswerFromUser(questionId, currentUserId)
            .then(answer => this.setState({answer: answer.text, alreadyAnswered: true, answerID: answer.id}))
    }

    componentDidUpdate(prevProps) {
        const { fetchQuestion, currentUserId } = this.props;
        const questionId = this.props.match.params.questionId
        if(prevProps.match.params.questionId !== questionId) {
            fetchQuestion(questionId);
            fetchAnswerFromUser(questionId, currentUserId)
                .then(answer => this.setState({answer: answer.text, alreadyAnswered: true, answerID: answer.id}));
        }
    }


    render() {
        const { question, answers} = this.props;
        const { alreadyAnswered } = this.state;
        const numAnswers = Object.keys(answers).length;
        if(question === undefined) {
            return null;
        }
        return (
            <section id="question-page-container">
                <div className="question-answer-page">
                    <div className="QA-container">
                        <h3>{question.title}</h3>
                        <div className="interact-component answer-button" onClick={this.answerQuestion}>
                            <i className="far fa-edit" color="#329bff"/>
                            <span>{alreadyAnswered ? "Edit" : "Answer"}</span>
                        </div>
                        <section id="write-answer" className="disappear">
                            <PostAnswerContainer questionId={question.id} currentUser={window.currentUser} state={this.state}/>
                        </section>
                        <div id="num-answers">{numAnswers} {numAnswers > 1 ? "Answers" : (numAnswers === 1) ? "Answer" : "No answers"}</div>
                        <AnswerContainer questionId={question.id}/>
                    </div>
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
}

export default QuestionPage;