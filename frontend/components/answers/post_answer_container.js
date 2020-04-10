import { connect } from "react-redux";
import PostAnswer from "./post_answer";
import { postAnswer, editAnswer } from "../../actions/answer_actions";
import { fetchAnswerFromUser } from "../../util/answer_util";

const mapStateToProps = (state, ownProps) => ({
    currentUserId: state.session.currentUser.id,
    questionId: ownProps.questionId,
    alreadyAnswered: ownProps.state.alreadyAnswered,
    answerText: ownProps.state.answer,
    answerID: ownProps.state.answerID
})

const mapDispatchToProps = dispatch => ({
    postAnswer: answer => dispatch(postAnswer(answer)), 
    editAnswer: (answerID, answer) => dispatch(editAnswer(answerID, answer))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostAnswer);