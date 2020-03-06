import { connect } from "react-redux";
import AnswerIndex from "./answer_index";
import { fetchAllQuestionAnswers, fetchAllAnswerers } from "../../util/question_answer_util";
import { receiveAllAnswers } from "../../actions/answer_actions";
import { receiveAllUsers } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => ({
    questionId: ownProps.questionId,
    answers: state.entities.answers,
    users: state.entities.users
})

const mapDispatchToProps = dispatch => ({
    fetchAllQuestionAnswers: questionId => fetchAllQuestionAnswers(questionId)
        .then(answers => dispatch(receiveAllAnswers(answers))),
    fetchAllAnswerers: questionId => fetchAllAnswerers(questionId)
        .then(users => dispatch(receiveAllUsers(users)))
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswerIndex);