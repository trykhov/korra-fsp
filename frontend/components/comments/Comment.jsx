import React, { useEffect, useState } from 'react';
import { fetchUser } from '../../util/user_util';

function Comment(props) {
    const {text, user_id, created_at} = props.comment;
    const [user, setUser] = useState({username: ""});

    useEffect(() => {
        fetchUser(user_id)
            .then(user => setUser(user))
    }, [user_id])

    const time = new Date(created_at);
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
            <div className="user-comment">{text}</div>
        </li>
    )
}

export default Comment;