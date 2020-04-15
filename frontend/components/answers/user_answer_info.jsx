import React from 'react';

const UserAnswerInfo = props => {
    const { answer, user } = props;
    const time = new Date(answer.created_at);
    const dateAnswered = time.toDateString().substring(4);
    return (
        <div className="answer-user-container">
            <img className="profile-image" src={window.defaultImage}/>
            <div className="user-info">
                <div className="username">
                    { user.username }
                </div>
                <div className="answered-date">
                    Answered { dateAnswered }
                </div>
            </div>
        </div>
    )
}

export default UserAnswerInfo;