import React from 'react';
import { fetchAllAnswerers } from '../../util/question_answer_util';
import { connect } from 'react-redux';

class AnswerIndexItem extends React.Component {
    // return individual answers
    render() {
        const { answer, users } = this.props;
        const user = users[answer.user_id];
        return (
            <li className="answer-container">
                <div className="answer-user-container">
                    <div className="username">
                        { user.username }
                    </div>
                </div>
                <p className="answer">{answer.text}</p>
            </li>
        )
    }
}

export default AnswerIndexItem;