import React from 'react';
import AnswerIndexItem from './answer_index_item';

class AnswerIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAllQuestionAnswers(this.props.questionId);
        this.props.fetchAllAnswerers(this.props.questionId);
    }

    // should return a list of answer index items
    render() {
        const { answers, users } = this.props;
        // have the answers and the people that answered already loaded
        const shouldRender = Object.keys(answers).length && Object.keys(users).length;
        if(shouldRender) {
            return (
                <ul>
                    {
                        Object.keys(answers).map(id => 
                            <AnswerIndexItem key={id} answer={answers[id]} users={users}/>
                        )
                    }
                </ul>
            )
        }
        return <div>No answers yet.</div>;
    }
}

export default AnswerIndex;