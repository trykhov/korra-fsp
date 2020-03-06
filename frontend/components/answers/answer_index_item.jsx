import React from 'react';

class AnswerIndexItem extends React.Component {
    // return individual answers

    render() {
        const { answer, users } = this.props;
        const time = new Date(this.props.answer.created_at);
        const user = users[answer.user_id];
        const dateAnswered = time.toDateString().substring(4);;
        return (
            <li className="single-answer-container">
                <div className="answer-user-container">
                    <img className="profile-image answer-profile-picture" src={window.defaultImage}/>
                    <div className="user-info">
                        <div className="username">
                            { user.username }
                        </div>
                        <div className="answered-date">
                            Answered { dateAnswered }
                        </div>
                    </div>
                </div>
                <p className="answer">{answer.text}</p>
            </li>
        )
    }
}

export default AnswerIndexItem;