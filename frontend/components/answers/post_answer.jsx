import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';

import AppContext from '../../contexts/AppContext';

function PostAnswer(props) {
    // const { questionId, alreadyAnswered, answerID } = props;
    console.log(props);
    const { questionID, answerID, fetchAnswerFromUser } = props;
    const [alreadyAnswered, setAlreadyAnswered] = useState(false);

    const formik = useFormik({
        initialValues: { 
            text: "",
            questionID,
            answerID
        }
    })

    // useEffect(() => {
    //     fetchAnswerFromUser()
    // }, [questionID]);

    const { text } = formik.values;

    const closePost = () => {
        const writeAnswer = document.getElementById("write-answer");
        writeAnswer.classList.add("disappear");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(alreadyAnswered) {
            props.editAnswer(answerID, text)
                .then(() => closePost());
        } else {
            props.postAnswer(formik.values)
                .then(() => closePost());
        }
    }
    
    return (
        <form>
            <textarea 
                placeholder="Write your answer"
                onChange={formik.handleChange}
                value={text}
            >    
            </textarea>
            <div className="answer-submit-container">
                <button id="submit" onClick={e => onSubmit(e)}>{ alreadyAnswered ? "Update" : "Submit" }</button>
                <button id="cancel-button" >Cancel</button>
            </div>
        </form>
    )

}


// class PostAnswer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: this.props.answerText,
//             question_id: this.props.questionId,
//             user_id: this.props.currentUserId,
//             alreadyAnswered: this.props.alreadyAnswered,
//             answerID: this.props.answerID
//         }
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleInput() {
//         return (e) => this.setState({ text: e.target.value });
//     }

//     closePost() {
//         const writeAnswer = document.getElementById("write-answer");
//         writeAnswer.classList.add("disappear");
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         if(this.state.alreadyAnswered) {
//             this.props.editAnswer(this.state.answerID, {text: this.state.text})
//                 .then(() => this.closePost());
//         } else {
//             this.props.postAnswer(this.state)
//                 .then(res => this.setState({alreadyAnswered: true, answerID: res.answer.id}))
//                 .then(() => this.closePost())
//         }
//     }

//     // constructor is only created once
//     // need to update the state when the parent component updates state
//     componentDidUpdate(prevProps) {
//         if(prevProps.answerID !== this.props.answerID) {
//             this.setState({
//                 text: this.props.answerText,
//                 alreadyAnswered: this.props.alreadyAnswered,
//                 answerID: this.props.answerID
//             })
//         }
//     }

//     render() {
//         const { alreadyAnswered } = this.state;
//         return (
//             <form>
//                 <textarea 
//                     placeholder="Write your answer"
//                     onChange={this.handleInput()}
//                     value={this.state.text}
//                 >    
//                 </textarea>
//                 <div className="answer-submit-container">
//                     <button id="submit" onClick={e => this.handleSubmit(e)}>{ alreadyAnswered ? "Update" : "Submit" }</button>
//                     <button id="cancel-button" onClick={() => this.closePost()}>Cancel</button>
//                 </div>
//             </form>
//         )
//     }
// }

export default PostAnswer;