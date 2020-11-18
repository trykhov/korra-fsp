import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Comment from './Comment';
import { createComment, fetchAnswerComments } from '../../util/comment_util';


function CommentsContainer(props) {

    const { answerId, currentUserId } = props;
    const [comments, setComments] = useState(null);

    useEffect(() => {
        fetchAnswerComments(answerId)
            .then(res => {
                const commentsArray = Object.values(res);
                const commentsList = commentsArray.map(el => <Comment key={el.id} comment={el} />)
                setComments(commentsList);
            })
    }, [answerId])

    const formik = useFormik({
        initialValues: {
            text: "",
            answerId,
            currentUserId
        }
    })

    const handleSubmit = () => {
        console.log(formik.values);
    }

    const { text } = formik.values;
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
                    />
                </div>
                <button onClick={handleSubmit}
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