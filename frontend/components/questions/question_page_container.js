import { connect } from "react-redux";
import QuestionPage from "./question_page";
import { fetchQuestion } from "../../actions/question_actions";
import { receiveAllAnswers } from "../../actions/answer_actions";
import { fetchAllQuestionAnswers } from "../../util/question_answer_util";








const mapStateToProps = (state, ownProps) => ({
    question: state.entities.questions[ownProps.match.params.questionId],
    answers: state.answers,
    users: state.users
})

const mapDispatchToProps = dispatch => ({
    // make one for users that answered

    fetchQuestion: questionId => dispatch(fetchQuestion(questionId)),

    // receives answers for this specific question
    fetchAllAnswersQuestion: questionId => (
        fetchAllQuestionAnswers(questionId)
        .then(answers => dispatch(receiveAllAnswers(answers)))
    )

})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);