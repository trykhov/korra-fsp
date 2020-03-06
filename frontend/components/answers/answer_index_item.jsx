import React from 'react';

class AnswerIndexItem extends React.Component {

    // return individual answers
    render() {
        const { answer } = this.props;
        return (
            <li>
                <p>{answer.text}</p>
            </li>
        )
    }
}

export default AnswerIndexItem;