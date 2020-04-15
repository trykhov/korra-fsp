import React, { useEffect, useState } from 'react';
import UserAnswerInfo from '../answers/user_answer_info';
import CommentContainer from '../comments/comment_container';
import { Link } from 'react-router-dom';
import UserAnswersContainer from '../answers/to_profilepage/user_answers_container';

const UserProfile = props => {

    const [tab, setTab] = useState("answer"); 

    const { userId, user } = props;

    useEffect(() => {
        props.fetchUser(userId);
    }, [userId])
    
    function selectTab(tab) {
        if(tab === "answer") {

            return //
        } else {
            return //
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
                        <span onClick={() => setTab("answers")}>Answers</span>
                        <span onClick={() => setTab("questions")}>Questions</span>
                    </div>
                    <div id="profile-nav-indicator">
                        {/* <span>{numQuestions} {numQuestions === 1 ? "Question" : "Questions"}</span> */}
                    </div>
                    <UserAnswersContainer user={user}/>
                </div>
            </section>
        )
    } else {
        return null;
    }

};


export default UserProfile;