import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../util/user_util';

const UserAnswerInfo = props => {
    const { dateAnswered, userId } = props;
    const [user, setUser] = useState({username: "", id: ""});

    useEffect(() => {
        fetchUser(userId)
            .then(user => setUser(user))
    }, [userId])

    console.log(user);
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