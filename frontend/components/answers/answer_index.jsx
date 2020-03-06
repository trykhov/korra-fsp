import React from 'react';
import AnswerIndexItem from './answer_index_item';

class AnswerIndex extends React.Component {

    // getAllAnswers() {
    //     console.log(this.props.answers);
    // }
    componentDidMount() {
        this.props.fetchAllQuestionAnswers(this.props.questionId);
    }

    // should return a list of answer index items
    render() {
        if(!(this.props.answers instanceof Array)) {
            return <div>No answers yet.</div>;
        }
        return (
            <ul>
                {this.props.answers.map(answer => 
                     <AnswerIndexItem key={answer.id} answer={answer}/>
                )}
            </ul>
        )
    }
}

export default AnswerIndex;