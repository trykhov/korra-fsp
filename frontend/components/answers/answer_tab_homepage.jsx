import React from 'react';

// this will appear in the home page as an answer to a question
class AnswerTab extends React.Component {
    


    render() {
        // const { user, answer, question } = this.props;
        return (
            <li className="answer-tab-container">
                <p className="question-asked">
                    <a href="">Insert question here</a>
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
                <div className="user-answer">
                    <p>
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
                    </p>
                    <div className="read-more">
                        <span>(more)</span>
                    </div>

                </div>
            </li>
        )
    }
}

export default AnswerTab