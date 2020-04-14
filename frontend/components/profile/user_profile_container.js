import { connect } from "react-redux";
import UserProfile from './user_profile';
import { fetchUserQuestions } from "../../actions/question_actions";
import { fetchUserAnswers } from "../../actions/answer_actions";
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => ({
    userId: ownProps.match.params.userId,
    user: state.entities.users[ownProps.match.params.userId],
    questions: state.entities.questions,
    answers: state.entities.answers
})

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    // receive all questions asked by user
    fetchUserQuestions: userId => dispatch(fetchUserQuestions(userId)),
    // receive all answers by the user
    fetchUserAnswers: userId => dispatch(fetchUserAnswers(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);