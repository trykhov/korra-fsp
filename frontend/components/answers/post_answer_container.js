import { connect } from "react-redux";
import PostAnswer from "./post_answer";
import { postAnswer, editAnswer } from "../../actions/answer_actions";

const mapStateToProps = (state, ownProps) => ({
    // questionID should be retrieved by context provider
    questionId: ownProps.questionId,
    alreadyAnswered: ownProps.state.alreadyAnswered,
    answerID: ownProps.state.answerID
})

const mapDispatchToProps = dispatch => ({
    postAnswer: answer => dispatch(postAnswer(answer)), 
    editAnswer: (answerID, answer) => dispatch(editAnswer(answerID, answer))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostAnswer);