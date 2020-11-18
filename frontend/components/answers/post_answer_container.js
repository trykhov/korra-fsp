import { connect } from "react-redux";
import PostAnswer from "./post_answer";
import { postAnswer, editAnswer } from "../../actions/answer_actions";
import { fetchAnswerFromUser } from "../../util/answer_util";

const mapStateToProps = (state, ownProps) => ({
    // questionID should be retrieved by context provider
    questionID: ownProps.questionId,
    alreadyAnswered: ownProps.state.alreadyAnswered,
    answerID: ownProps.state.answerID
})

const mapDispatchToProps = dispatch => ({
    fetchAnswerFromUser: (questionID, currentUserID) => dispatch(fetchAnswerFromUser(questionID, currentUserID)),
    postAnswer: answer => dispatch(postAnswer(answer)), 
    editAnswer: (answerID, answer) => dispatch(editAnswer(answerID, answer))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostAnswer);