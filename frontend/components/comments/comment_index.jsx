import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {


    componentDidMount() {
        const { showComments, answerId } = this.props;
        showComments(answerId);
    }

    render() {
        const { comments, answerId } = this.props;
        if(!comments) {
           return null; 
        }
        // get the comments that only relate to the answer
        const commentsList = Object.values(comments).filter(comment => comment.answer_id === answerId);
        return (
            <section className="comment-index-container">
                <div className="add-comment-container answer-user-container">
                    <img className="profile-image" src={window.defaultImage}/>
                    <input type="text"/>
                </div>
                <div className="comment-index-list-container">
                    <ul>
                        {
                            commentsList.map(comment => {
                                return <CommentIndexItem key={comment.id} comment={comment} />
                            })
                        }
                    </ul>
                </div>
            </section>
        )
    }
}

export default CommentIndex;