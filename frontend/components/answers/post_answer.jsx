import React from 'react';

class PostAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            question_id: this.props.questionId,
            user_id: this.props.currentUserId,
            alreadyAnswered: false,
            answerID: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput() {
        return (e) => this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.alreadyAnswered) {
            this.props.editAnswer(this.state.answerID, {text: this.state.text})
                .then(() => this.setState({text: ''}))
        } else {
            this.props.postAnswer(this.state)
                .then(this.setState({text: ''}));
        }
    }

    componentDidMount() {
        const { questionId, currentUserId } = this.props;
        this.props.fetchAnswerFromUser(questionId, currentUserId)
            .then(answer => this.setState({text: answer.text, alreadyAnswered: true, answerID: answer.id}))
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