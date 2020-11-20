import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';

import { editAnswer, fetchAnswerFromUser, postAnswer } from '../../util/answer_util';

function PostAnswer(props) {
    const { question, currentUser } = props;
    const [userAnswer, setUserAnswer] = useState({text: ""});

    const formik = useFormik({
        initialValues: { 
            text: "",
            question_id: question.id,
            user_id: currentUser.id
        }
    })
    const { text } = formik.values;

    // posting / updating answer should rerender component
    useEffect(() => {
        fetchAnswerFromUser(question.id, currentUser.id)
            .then(ans => {
                formik.setFieldValue("text", ans.text);
                setUserAnswer(ans);
            })
    }, [question]);

    const togglePost = () => {
        const writeAnswer = document.getElementById("write-answer");
        writeAnswer.classList.toggle("disappear");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let response;
        if(userAnswer.text) {
            response = editAnswer(userAnswer.id, formik.values);
        } else {
            response = postAnswer(formik.values);
        }
        response.then(res => {
            setUserAnswer(res);
            togglePost();
        });
    }
    
    return (
        <div>  
            <div className="interact-component answer-button" onClick={togglePost}>
                <i className="far fa-edit" color="#329bff"/>
                <span>{userAnswer.text ? "Edit" : "Answer"}</span>
            </div>
            <section id="write-answer" className="disappear">
                <form>
                    <textarea
                        name="text" 
                        placeholder="Write your answer"
                        onChange={formik.handleChange}
                        value={text}
                    >    
                    </textarea>
                    <div className="answer-submit-container">
                        <button id="submit" type="submit" onClick={e => onSubmit(e)}>{ userAnswer.text ? "Update" : "Submit" }</button>
                        {/* fix the rerendering issue */}
                        <button id="cancel-button" onClick={() => togglePost()}>Cancel</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default PostAnswer;