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
                    <textarea></textarea>
                    <button>Submit</button>
                </form>
            
        )
    }
}

export default PostAnswer;