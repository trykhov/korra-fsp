import { connect } from "react-redux";
import { fetchUserQuestions } from "../../actions/question_actions";
import UserQuestions from "./user_questions";

const mapStateToProps = (state, ownProps) => ({
    user: ownProps.user,
    questions: state.entities.questions
})

const mapDispatchToProps = dispatch => ({
    fetchUserQuestions: userId => dispatch(fetchUserQuestions(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserQuestions);