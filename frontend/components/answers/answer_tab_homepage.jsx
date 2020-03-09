import React from 'react';
import { Link } from 'react-router-dom';

// this will appear in the home page as an answer to a question
class AnswerTab extends React.Component {
    
    expandAnswer() {
        const answerContainer = document.getElementById("test");
        const answerContainer2 = document.getElementById("test-2");
        answerContainer.style.height = "100%";
        answerContainer2.style.height = "";
    }

    render() {
        const { question } = this.props;
        return (
            <li id="test-2" className="answer-tab-container">
                <p className="question-asked">
                    <Link to={`/question/${question.id}`}>{question.title}</Link>
                </p>
                <div className="answer-user-container">
                    <img className="profile-image answer-profile-picture" src={window.defaultImage}/>
                    <div className="user-info">
                        <div className="username">
                            Username
                        </div>
                        <div className="answered-date">
                            {"Answer date"}
                        </div>
                    </div>
                </div>
                <div id="test" className="user-answer-container">
                    <span className="answer">
                    A bunch of gibberish
                    A bunch of gibberish
                    A bunch of gibberish
                    A bunch of gibberish
                    A bunch of gibberish

                    A bunch of gibberish
                    A bunch of gibberish
                    A bunch of gibberish
                    v
                    A bunch of gibberish

                    A bunch of gibberish
                    A bunch of gibberish
                    vA bunch of gibberish

                    A bunch of gibberish
                    A bunch of gibberish
                    v
                    A bunch of gibberish
                    A bunch of gibberish
                    v
                    A bunch of gibberish
                    A bunch of gibberish
                    v
                    A bunch of gibberish
                    A bunch of gibberish
                    v
                    A bunch of gibberish
                    A bunch of gibberish
                    v
                    A bunch of gibberish
                    A bunch of gibberish
                    v
                    A bunch of gibberish
                    A bunch of gibberish

                    A bunch of gibberish
                    A bunch of gibberish
                    v
                    A bunch of gibberish
                    A bunch of gibberish
                    v
                    A bunch of gibberish
                    A bunch of gibberish
                    v
                    A bunch of gibberish
                    A bunch of gibberish


                    A bunch of gibberish
                    A bunch of gibberish
                    v
                    A bunch of gibberish
                    A bunch of gibberish
                    v
                    A bunch of gibberish
                    A bunch of gibberish
                    </span>
                    {/* <div className="read-more-container"
                        onClick={this.expandAnswer}
                        >(more)</div> */}
                </div>
            </li>
        )
    }
}

export default AnswerTab