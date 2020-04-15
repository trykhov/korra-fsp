import React, { useEffect } from 'react';
import CommentContainer from '../../comments/comment_container';
import { Link } from 'react-router-dom';
import UserAnswerInfo from '../user_answer_info';


const UserAnswers = props => {
    
    const { answers, user, questions } = props;
    
    useEffect(() => {
        props.fetchUserAnswers(user.id);
        props.fetchQuestionUserAnswered(user.id);
    }, [user])
    
    let ready = true;
    let answersList = Object.values(answers).map(ans => {
        if(questions[ans.question_id] !== undefined) {
            return (
                <li className="single-answer-container" key={ans.id}>
                    <UserAnswerInfo answer={ans} user={user}/>
                    <p className="question-asked">
                        <Link to={`/question/${ans.question_id}`}>{questions[ans.question_id].title}</Link>
                    </p>
                    <p className="answer">{ans.text}</p>
                    <CommentContainer answerId={ans.id} />
                </li>
            )
        } else {
            ready = false;
            return null;
        }
    })
    
    if(ready) {
        return (
            <ul id="user-post-content">
                {answersList}
            </ul>
        )
    } else {
        return null
    }
}

export default UserAnswers;