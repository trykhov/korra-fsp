import React, { useEffect, useState } from 'react';
import Answer from './Answer';
import { fetchAllQuestionAnswers } from '../../../util/question_answer_util';
import { fetchAnswerFromUser } from '../../../util/answer_util';
import PostAnswer from '../PostAnswer';
import { useFormik } from 'formik';

function AnswersContainer(props) {
    const { question, currentUser } = props;
    const [answers, setAnswers] = useState([]);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        fetchAllQuestionAnswers(question.id)
            .then(res => {
                const answersArray = Object.values(res);
                const answersList = answersArray.map(ans => <Answer key={ans.id} userId={ans.user_id} answer={ans}/>)
                setAnswers(answersList);
                setRerender(false);
            })
    }, [question, rerender])
    
    return (
        <div className="QA-container">
            <h3>{question.title}</h3>        
            <PostAnswer currentUser={currentUser} question={question} setRerender={setRerender}/>
            <div id="num-answers">{answers.length} {answers.length > 1 ? "Answers" : (answers.length === 1) ? "Answer" : "No answers"}</div>
            {answers}
        </div>   
    )
}

export default AnswersContainer;