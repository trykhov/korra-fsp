import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

// when user clicks on "Add Question", a pop-up appears asking for user to enter a question
class AskQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
        // this._isMounted = this.props.askQuestion;
    }

    handleInput() {
        return (e) => this.setState({title: e.target.value});
    }

    handleSubmit(e) {        
        e.preventDefault();
        this.props.askQuestion(this.state)
            .then(res => this.props.history.push(`/question/${res.question.id}`))
            .then(this.setState({title: ''}))
            .then(this.cancelQuestion())
    }

    componentWillUnmount() {
        // this._isMounted.abort();
    }


    cancelQuestion() {
        const questionComponent = document.getElementById("question-component");
        questionComponent.classList.toggle('disappear');
    }

    render() {
        const { currentUser } = this.props;
        const questionPlaceholder = 'Start your question with "What", "How", "Why", etc.';
        return (
            // first div takes up the whole window
            <div id="question-component" className="disappear modal">
                <div id="question-overlay-container" >
                    {/* will be the container that holds the container for the question */}
                    {/* will be used to center the container */}
                    <div id="outter-question-container">
                        <section id="top-options">
                            <div id="add-question-container" className="question-container">
                                <div>Add Question</div>
                                <i 
                                    className="fas fa-times" 
                                    onClick={this.cancelQuestion}
                                />    
                            </div>
                        </section>
                        <div id="asker-form-container">
                            <section id="asker-container">
                                <img className="profile-image" src={window.defaultImage}/>
                                <span>{currentUser.username} asked</span>
                            </section>
                            <form id="main-question-container" onSubmit={e => this.handleSubmit(e)}>
                                <section id="question-area">
                                    <textarea 
                                        onChange={this.handleInput()} 
                                        placeholder={questionPlaceholder}
                                        value={this.state.title}
                                    />
                                </section>
                                <div id="question-submit" className="button-container">
                                    <a 
                                        onClick={this.cancelQuestion}>
                                            Cancel
                                    </a>
                                    <button className="form-button">Add Question</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// allows access to the history properties
export default withRouter(AskQuestion);