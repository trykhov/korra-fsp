import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    
    constructor(props) {
        super(props);
        this._isMounted = $.ajax({
            url: `/api/answers/${this.props.answerId}/users`,
            method: 'GET'
        });
        this.state = {
            text: '',
            user_id: this.props.currentUser.id,
            answer_id: this.props.answerId,
            usersThatCommented: {},
        }
    }

    componentDidMount() {
        this._isMounted.then(users => this.setState({usersThatCommented: users}))
    }

    componentWillUnmount() {
        this._isMounted.abort(); // stop all async calls to prevent memory leak
    }

    handleInput() {
        return (e) => this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state)
            .then(res => (
                $.ajax({
                    url: `/api/answers/${res.comment.answer_id}/users`,
                    method: 'GET'
                })
            ))
            .then(users => this.setState({usersThatCommented: users}))
            .then(this.setState({text: ''}))
    }

    render() {
        const { comments, answerId } = this.props;
        const { usersThatCommented } = this.state;
        if(!comments) {
           return null; 
        }
        // get the comments that only relate to the answer
        const commentsList = Object.values(comments).filter(comment => comment.answer_id === answerId);  
        return (
            <section className="comment-index-container">
                <div className="add-comment-container answer-user-container">
                    <img className="profile-image comment-user" src={window.defaultImage}/>
                    <div className="comment-input-container">
                        <input 
                            type="text" 
                            placeholder="Add a comment..."
                            onChange={this.handleInput()}
                            value={this.state.text}
                        />
                    </div>
                    <button onClick={(e) => this.handleSubmit(e)}
                        className={`submit-comment ${this.state.text.length ? "" : "disappear"}`}
                    >
                        Add Comment
                    </button>
                </div>
                <div className="comment-index-list-container">
                    <ul>
                        { commentsList.map(comment => (<CommentIndexItem key={comment.id} comment={comment} user={usersThatCommented[comment.user_id]}/> ))}
                    </ul>
                </div>
            </section>
        )
    }
}

export default CommentIndex;