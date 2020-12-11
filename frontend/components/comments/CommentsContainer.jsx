import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Comment from './Comment';
import { createComment, fetchAnswerComments } from '../../util/comment_util';


function CommentsContainer(props) {

    const { answerId, currentUserId } = props;
    const [comments, setComments] = useState([]);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        fetchAnswerComments(answerId)
            .then(res => {
                const commentsArray = Object.values(res);
                const commentsList = commentsArray.map(el => <Comment key={el.id} comment={el} />)
                setComments(commentsList);
                setRerender(false);
            })
    }, [answerId, rerender])

    const formik = useFormik({
        initialValues: {
            text: "",
            answer_id: answerId,
            user_id: currentUserId
        }
    })
    
    const { text } = formik.values;

    const onSubmit = (e) => {
        e.preventDefault();
        createComment(formik.values)
            .then(() => {
                formik.setFieldValue("text", "");
                setRerender(true);
            })
    }

    return (
        <section className="comment-index-container">
            <div className="add-comment-container answer-user-container">
                <img className="profile-image comment-user" src={window.defaultImage}/>
                <div className="comment-input-container">
                    <input 
                        type="text" 
                        placeholder="Add a comment..."
                        onChange={formik.handleChange}
                        name="text"
                        value={text}
                    />
                </div>
                <button onClick={e => onSubmit(e)}
                    className={`submit-comment ${text ? "" : "disappear"}`}
                >
                    Add Comment
                </button>
            </div>
            <div className="comment-index-list-container">
                <ul>
                    {comments}
                </ul>
            </div>
        </section>
    )
}

export default CommentsContainer;