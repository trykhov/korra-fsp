import React, { useEffect, useState } from 'react';
import UserAnswerInfo from '../answers/user_answer_info';
import CommentContainer from '../comments/comment_container';
import { Link } from 'react-router-dom';
import UserAnswersContainer from '../answers/to_profilepage/user_answers_container';
import UserQuestionsContainer from '../questions/user_questions_container';


const UserProfile = props => {

    const [tab, setTab] = useState("answers"); 

    const { userId, user } = props;

    useEffect(() => {
        props.fetchUser(userId);
    }, [userId])
    
    function selectTab(tab) {
        if(tab === "answers") {
            return <UserAnswersContainer user={user}/>
        } else {
            return <UserQuestionsContainer user={user}/>
        }
    }


    if(user) {
        return (
            <section id="user-page-container">
                <div id="user-content">
                    <div id="user-info">
                        <img className="user-pic" src={window.defaultImage} alt=""/>
                        <span>{user.username}</span>
                    </div>
                    <div id="user-post-nav">
                        <div className="active" onClick={() => setTab("answers")}>Answers</div>
                        <div onClick={() => setTab("questions")}>Questions</div>
                    </div>
                    {selectTab(tab)}
                </div>
            </section>
        )
    } else {
        return null;
    }

};


export default UserProfile;