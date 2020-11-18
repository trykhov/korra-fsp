import { connect } from "react-redux";
import AnswerIndex from "./AnswerContainer";
import { fetchAllQuestionAnswers, fetchAllAnswerers } from "../../../util/question_answer_util";
import { receiveAllAnswers } from "../../../actions/answer_actions";
import { receiveAllUsers } from "../../../actions/user_actions";
import { showComments } from "../../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => ({
    questionId: ownProps.questionId,
    answers: state.entities.answers,
    users: state.entities.users,
    comments: state.entities.comments
})

const mapDispatchToProps = dispatch => ({
    fetchAllQuestionAnswers: questionId => fetchAllQuestionAnswers(questionId)
        .then(answers => dispatch(receiveAllAnswers(answers))),
    fetchAllAnswerers: questionId => fetchAllAnswerers(questionId)
        .then(users => dispatch(receiveAllUsers(users))),
    showComments: questionId => dispatch(showComments(questionId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswerIndex);