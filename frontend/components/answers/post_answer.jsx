import React from 'react';

class PostAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answerText: ''
        }
    }

    handleInput() {
        return (e) => this.setState({ answerText: e.target.value });
    }



    render() {
        return (
                <form>
                    <textarea placeholder="Write your answer"></textarea>
                    <div className="answer-submit-container">
                        <button>Submit</button>
                    </div>
                </form>
            
        )
    }
}

export default PostAnswer;