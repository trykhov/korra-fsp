import { connect } from "react-redux";
import AnswerIndex from "./answer_index";
import { fetchAllQuestionAnswers } from "../../util/question_answer_util";
import { receiveAllAnswers } from "../../actions/answer_actions";

const mapStateToProps = state => ({
    answers: state.entities.answers
})

const mapDispatchToProps = dispatch => ({
    fetchAllQuestionAnswers: questionId => fetchAllQuestionAnswers(questionId)
        .then(answers => dispatch(receiveAllAnswers(answers)))
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswerIndex)