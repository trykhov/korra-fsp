import React, { useEffect, useState } from 'react';
import { fetchAnswerFromUser } from '../../../util/answer_util';
import CommentContainer from '../../comments/comment_container';
import UserAnswerInfo from '../user_answer_info';

function Answer(props) {
    const { answer, userId } = props;


    return (
        <li className="single-answer-container">
            {/* <UserAnswerInfo answer={answer} user={user} /> */}
            <p className="answer">{answer}</p>
            {/* <CommentContainer answerId={answer.id} /> */}
        </li>
    )

    return null;
}


// class AnswerIndexItem extends React.Component {

//     constructor(props) {
//         super(props);
//         this._isMounted = $.ajax({
//             url: `/api/answers/${this.props.answer.id}/users`,
//             method: 'GET'
//         });
//         this.state = {
//             usersThatCommented: {}
//         }
//     }

//     componentDidMount() {
//         this._isMounted.then(users => this.setState({usersThatCommented: users}))
//     }

//     componentWillUnmount() {
//         this._isMounted.abort();
//     }

//     render() {
//         const { answer, user } = this.props;
//         if(user === undefined) {
//             return null;
//         }
//         return (
//             <li className="single-answer-container">
//                 {/* <UserAnswerInfo answer={answer} user={user} /> */}
//                 <p className="answer">{answer.text}</p>
//                 {/* <CommentContainer answerId={answer.id} /> */}
//             </li>
//         )
//     }
// }

export default Answer;