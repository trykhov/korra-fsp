import React from 'react';
import { Link } from 'react-router-dom';

const UserAnswerInfo = props => {
    const { answer, user } = props;
    const time = new Date(answer.created_at);
    const dateAnswered = time.toDateString().substring(4);
    return (
        <div className="answer-user-container">
            <img className="profile-image" src={window.defaultImage}/>
            <div className="user-info">
                <Link className="username" to={`/user/${user.id}`}>
                    { user.username }
                </Link>
                <div className="answered-date">
                    Answered { dateAnswered }
                </div>
            </div>
        </div>
    )
}

export default UserAnswerInfo;