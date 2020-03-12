import { connect } from "react-redux";
import AnswerTab from "./answer_tab_homepage";
import { fetchAllQuestionAnswers, fetchAllAnswerers } from "../../util/question_answer_util";


const mapDispatchToProps = dispatch => ({
    fetchAllQuestionAnswers: questionId => fetchAllQuestionAnswers(questionId),
    fetchAllAnswerers: questionId => fetchAllAnswerers(questionId)
})


export default connect(null, mapDispatchToProps)(AnswerTab);