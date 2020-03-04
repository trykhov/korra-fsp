import React from 'react';

// when user clicks on "Add Question", a pop-up appears asking for user to enter a question
class AskQuestion extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const questionPlaceholder = 'Start your question with "What", "How", "Why", etc.'
        return (
            // first div takes up the whole window
            <div id="question-overlay-container">
                {/* will be the container that holds the container for the question */}
                {/* will be used to center the container */}
                <div id="flex-question-container">
                    <form id="main-question container">
                        <section id="top-options">
                            <div id="add-question-container">
                                <div>Add Question</div>
                                <i className="fas fa-times"></i>
                            </div>
                        </section>
                        <section id="question-area">
                            <textarea placeholder={questionPlaceholder}/>
                        </section>
                        <div id="question-submit">
                            <a>Cancel</a>
                            <button className="form-button">Add Question</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AskQuestion;