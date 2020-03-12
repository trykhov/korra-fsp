import React from 'react';

class CommentIndexItem extends React.Component {
    

    render() {
        const { comment, user } = this.props;
        if(user === undefined || comment === undefined) {
            return null
        }
        const time = new Date(comment.created_at);
        const dateCommented = time.toDateString().substring(4);
        return (
            <li className="single-comment-container">
                <div className="answer-user-container">
                    <img className="profile-image" src={window.defaultImage}/>
                    <div className="user-info">
                        <div className="username">
                            {user.username}
                        </div>
                        <div className="comment-date">
                            {dateCommented}
                        </div>
                    </div>
                </div>
                <div className="user-comment">{comment.text}</div>
            </li>
        )
    }
}

export default CommentIndexItem;