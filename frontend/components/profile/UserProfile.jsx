import React, { useEffect, useState } from 'react';
import UserAnswerInfo from '../answers/UserAnswerInfo';
import Commentsontainer from '../comments/CommentsContainer';
import { Link } from 'react-router-dom';
import UserAnswersContainer from '../answers/to_profilepage/user_answers_container';
import UserQuestionsContainer from '../questions/user_questions_container';
import { fetchUser } from '../../util/user_util';

function UserProfile(props) {
    
    const { userId } = props.match.params;
    const [tab, setTab] = useState("answers"); 
    const [user, setUser] = useState({id: userId, username: ""});
    

    useEffect(() => {
        fetchUser(userId)
        .then(res => setUser(res));
    }, [userId])
    
    function selectTab(tab) {
        const currActive = document.querySelector(".active");
        if(currActive) currActive.classList.remove("active");
        if(tab === "answers") {
            const userAnswersDiv = document.querySelector("#user-answers");
            if(userAnswersDiv) userAnswersDiv.classList.add("active");
            return <UserAnswersContainer user={user}/>
        } else {
            const userQuestionsDiv = document.querySelector("#user-questions");
            if(userQuestionsDiv) userQuestionsDiv.classList.add("active");
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
                        <div id="user-answers" className="active" onClick={() => setTab("answers")}>Answers</div>
                        <div id="user-questions" onClick={() => setTab("questions")}>Questions</div>
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