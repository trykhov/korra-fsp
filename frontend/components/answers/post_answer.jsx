import React from 'react';

class PostAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            question_id: this.props.questionId,
            user_id: this.props.currentUserId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput() {
        return (e) => this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.postAnswer(this.state)
            .then(this.setState({text: ''}));
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <textarea 
                    placeholder="Write your answer"
                    onChange={this.handleInput()}
                    value={this.state.text}
                >    
                </textarea>
                <div className="answer-submit-container">
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}

export default PostAnswer;