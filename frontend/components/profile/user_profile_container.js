import { connect } from "react-redux";
import UserProfile from './user_profile';
import { fetchUserQuestions } from "../../actions/question_actions";
import { fetchUserAnswers } from "../../actions/answer_actions";
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => ({
    userId: ownProps.match.params.userId,
    user: state.entities.users[ownProps.match.params.userId]
})

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);