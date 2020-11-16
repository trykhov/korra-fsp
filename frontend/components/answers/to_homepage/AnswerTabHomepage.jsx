import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllQuestionAnswers, fetchAllAnswerers } from "../../../util/question_answer_util";

// this will appear in the home page as an answer to a question
function AnswerTab(props) {
    const { question } = props;
    const questionID = question.id;

    const [users, setUsers] = useState(null);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        fetchAllAnswerers(questionID)
            .then(users => setUsers(users));
        fetchAllQuestionAnswers(questionID)
            .then(res => {
                const answers = Object.values(res);
                setAnswers(answers);
            });
    }, [])

    if(users && answers.length) {
        const answer = answers[Math.floor(Math.random() * answers.length)];
        const time = new Date(answer.created_at);
        const dateAnswered = time.toDateString().substring(4);
        return (
            <li className="answer-tab-container">
                <p className="question-asked">
                    <Link to={`/question/${questionID}`}>{question.title}</Link>
                </p>
                <div className="answer-user-container">
                    <img className="profile-image" src={window.defaultImage}/>
                    <div className="user-info">
                        <div className="username">
                            <Link to={`/user/${users[answer.user_id].id}`}>{users[answer.user_id].username }</Link>
                        </div>
                        <div className="answered-date">
                            Answered { dateAnswered }
                        </div>
                    </div>
                </div>
                <div className="user-answer-container">
                    <span className="answer">
                    {answer.text}
                    </span>
                </div>
            </li>
        )
    }
    return null;
    

}

export default withRouter(AnswerTab);