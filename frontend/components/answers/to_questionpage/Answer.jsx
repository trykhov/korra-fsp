import React from 'react';
import AppContext from '../../../contexts/AppContext';
import CommentsContainer from '../../comments/CommentsContainer';
import UserAnswerInfo from '../UserAnswerInfo';

function Answer(props) {
    const { text, id, user_id, created_at } = props.answer;

    const time = new Date(created_at);
    const dateAnswered = time.toDateString().substring(4);
    return (
        <li className="single-answer-container">
            <UserAnswerInfo dateAnswered={dateAnswered} userId={user_id} />
            <p className="answer">{text}</p>
            <AppContext.Consumer>
                {currentUser => <CommentsContainer answerId={id} currentUserId={currentUser.id}/>}
            </AppContext.Consumer>
        </li>
    )
}

export default Answer;