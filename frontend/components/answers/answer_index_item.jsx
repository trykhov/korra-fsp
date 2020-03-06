import React from 'react';

class AnswerIndexItem extends React.Component {

    // return individual answers
    render() {
        const { answer } = this.props;
        return (
            <li>
                <p>{answer.answer}</p>
            </li>
        )
    }
}

export default AnswerIndexItem;