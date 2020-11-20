import React, { useEffect, useState } from 'react';
import Answer from './Answer';
import { fetchAllQuestionAnswers } from '../../../util/question_answer_util';
import { fetchAnswerFromUser } from '../../../util/answer_util';
import PostAnswer from '../PostAnswer';



function AnswersContainer(props) {
    const { question, currentUser } = props;
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        fetchAllQuestionAnswers(question.id)
            .then(res => {
                const answersArray = Object.values(res);
                const answersList = answersArray.map(ans => <Answer key={ans.id} userId={ans.user_id} answer={ans}/>)
                setAnswers(answersList);
            })
    }, [question])

    return (
        <div className="QA-container">
            <h3>{question.title}</h3>        
            <PostAnswer currentUser={currentUser} question={question} />
            <div id="num-answers">{answers.length} {answers.length > 1 ? "Answers" : (answers.length === 1) ? "Answer" : "No answers"}</div>
            {answers}
        </div>   
    )
}

export default AnswersContainer;