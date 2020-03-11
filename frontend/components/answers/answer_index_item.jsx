import React from 'react';
import CommentContainer from '../comments/comment_container';



class AnswerIndexItem extends React.Component {
    // return individual answers

    render() {
        const { answer, user } = this.props;
        const time = new Date(answer.created_at);
        const dateAnswered = time.toDateString().substring(4);
        if(user === undefined) {
            return null;
        }
        return (
            <li className="single-answer-container">
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
                <p className="answer">{answer.text}</p>
                <CommentContainer answerId={answer.id}/>
            </li>
        )
    }
}

export default AnswerIndexItem;