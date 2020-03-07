import { connect } from "react-redux";
import PostAnswer from "./post_answer";
import { postAnswer } from "../../actions/answer_actions";

const mapStateToProps = (state, ownProps) => ({
    questionId: ownProps.id
})

const mapDispatchToProps = dispatch => ({
    postAnswer: answer => dispatch(postAnswer(answer))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostAnswer);