import React, { useEffect, useState } from 'react';
import PostAnswerContainer from '../answers/PostAnswer';
import { Link } from 'react-router-dom';

const UserQuestions = props => {

    const {user, questions} = props;

    useEffect(() => {
        props.fetchUserQuestions(user.id);
    }, [user])

    let questionsList = Object.values(questions).map(question => (
        <li key={question.id} className="single-answer-container">
            <p className="question-asked">
                <Link to={`/question/${question.id}`}>{question.title}</Link>
            </p>
        </li>
        )
    )

    let ready = questionsList.length > 0;
    if(ready) {
        return (
            <ul>
                <div id="profile-nav-indicator">
                    <span>{questionsList.length} {questionsList.length === 1 ? "Question" : "Questions"}</span>
                </div>
                {questionsList}
            </ul>
        )
    } else {
        return (
            <div id="profile-nav-indicator">
                <span>0 Questions</span>
            </div>
        )
    }
}

export default UserQuestions;