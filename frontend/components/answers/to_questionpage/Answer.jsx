import React from 'react';
import CommentContainer from '../../comments/comment_container';
import UserAnswerInfo from '../UserAnswerInfo';

function Answer(props) {
    const { answer, userId } = props;

    const time = new Date(answer.created_at);
    const dateAnswered = time.toDateString().substring(4);
    return (
        <li className="single-answer-container">
            <UserAnswerInfo dateAnswered={dateAnswered} userId={userId} />
            <p className="answer">{answer.text}</p>
            {/* <CommentContainer answerId={answer.id} /> */}
        </li>
    )
}

export default Answer;