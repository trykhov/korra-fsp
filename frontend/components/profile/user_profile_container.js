import { connect } from "react-redux";
import UserProfile from './user_profile';
import { fetchUserQuestions } from "../../actions/question_actions";
import { fetchUserAnswers } from "../../actions/answer_actions";
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => ({
    userId: ownProps.match.params.userId,
    user: state.entities.users[ownProps.match.params.userId],
    // questionsUserAsked: state.entities.questions,
    // answers: state.entities.answers
})

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    // fetchUserQuestions: userId => dispatch(fetchUserQuestions(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);