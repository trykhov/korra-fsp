import { connect } from "react-redux";
import UserAnswers from "./user_answers";
import { fetchUserAnswers } from "../../../actions/answer_actions";
import { fetchQuestionUserAnswered } from "../../../actions/question_actions";

const mapStateToProps = (state, ownProps) => ({
    user: ownProps.user,
    answers: state.entities.answers,
    questions: state.entities.questions
})


const mapDispatchToProps = dispatch => ({
    fetchUserAnswers: userId => dispatch(fetchUserAnswers(userId)),
    fetchQuestionUserAnswered: userId => dispatch(fetchQuestionUserAnswered(userId))
})


export default connect(mapStateToProps, mapDispatchToProps)(UserAnswers);