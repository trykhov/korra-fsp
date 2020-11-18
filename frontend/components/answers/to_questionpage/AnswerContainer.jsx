import React, { useEffect, useState } from 'react';
import Answer from './Answer';
import { fetchAllQuestionAnswers } from '../../../util/question_answer_util';
import { fetchAnswerFromUser } from '../../../util/answer_util';



function AnswersContainer(props) {
    const { question, currentUser } = props;
    const [userAnswer, setUserAnswer] = useState(null);
    const [answerList, setAnswerList] = useState(null);

    useEffect(() => {
        fetchAllQuestionAnswers(question.id)
            .then(res => {
                const answersArray = Object.values(res);
                const answers = answersArray.map(ans => <Answer key={ans.id} userId={ans.user_id} answer={ans}/>)
                setAnswerList(answers);
            })
        fetchAnswerFromUser(question.id, currentUser.id)
            .then(answer => setUserAnswer(answer));
    }, [question])

    const answerQuestion = () => {
        const writeAnswer = document.getElementById("write-answer");
        writeAnswer.classList.remove("disappear");
    }

    if(answerList) {
        const numAnswers = answerList.length;
        return (
            <div className="QA-container">
                <h3>{question.title}</h3>        
                <div className="interact-component answer-button" onClick={answerQuestion}>
                    <i className="far fa-edit" color="#329bff"/>
                    <span>{userAnswer ? "Edit" : "Answer"}</span>
                </div>
                <section id="write-answer" className="disappear">
                    {/* <PostAnswerContainer questionId={question.id} currentUser={currentUser} state={this.state}/> */}
                </section>
                <div id="num-answers">{numAnswers} {numAnswers > 1 ? "Answers" : (numAnswers === 1) ? "Answer" : "No answers"}</div>
                {answerList}
            </div>   
        )
    }
    return null;
}

export default AnswersContainer;