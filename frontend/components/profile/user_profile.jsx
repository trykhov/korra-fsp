import React, { useEffect, useState } from 'react';

const UserProfile = props => {

    useEffect(() => {
        const { user, userId } = props;
        if(user === undefined) {
            props.fetchUser(userId);
            props.fetchUserQuestions(userId);
            props.fetchUserAnswers(userId);
        }
    })

    const { user, questions, answers } = props;
    const answersList = Object.values(answers);
    const questionsList = Object.values(questions);
    const numAnswers = answersList.length;
    const numQuestions = questionsList.length;
    const ready = numAnswers > 0 && numQuestions > 0;
    if(ready) {
        return (
            <section id="user-page-container">
                <div id="user-content">
                    <div id="user-info">
                        <img className="user-pic" src={window.defaultImage} alt=""/>
                        <span>{user.username}</span>
                    </div>
                    <div id="user-post-nav">
                        <span className="active">{numAnswers} {numAnswers > 1 ? "Answers" : "Answer"}</span>
                        <span>{numQuestions} {numQuestions > 1 ? "Questions" : "Question"}</span>
                    </div>
                    <div id="profile-nav-indicator">
                        <span>34 Questions</span>
                    </div>
                    <div id="user-post-content">
                        
                    </div>
                </div>
            </section>
        )
    } else {
        return null;
    }

};


export default UserProfile;