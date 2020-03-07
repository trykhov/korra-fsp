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
            <section id="write-answer" className="disappear">
                <form>
                    <textarea></textarea>
                </form>
            </section>
        )
    }
}

export default PostAnswer;