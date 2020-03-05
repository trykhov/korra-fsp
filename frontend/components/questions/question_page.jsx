import React from 'react';

class QuestionPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // remember to put a route for this
        const { fetchQuestion, fetchAllAnswersQuestion } = this.props;
        const questionId = this.props.match.params.questionId;
        // remplacing box shadow of nav bar
        const navBar = document.getElementById("main-nav-bar")
        navBar.style.boxShadow = "0 3px 2px -2px rgba(200,200,200,0.2)"
        // document.body.style.backgroundColor = "rgb(255, 255, 255)";
        // puts the question into the state
        fetchQuestion(questionId);
        // puts all the answers into the state
        fetchAllAnswersQuestion(questionId);
    }

    render() {
        const { question, answers } = this.props;
        return (
            <section className="question-answer-page">
                <div className="QA-container">
                    <h3>{question ? question.title : ""}</h3>
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
                    <div id="num-answers">Num Answers</div>
                </div>
                <div className="related-questions">

                </div>
            </section>
        )
    }
}

export default QuestionPage;