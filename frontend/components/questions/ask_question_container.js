import { connect } from "react-redux";
import AskQuestion from "./ask_question";
import { askQuestion } from "../../actions/question_actions";


const mapStateToProps = state => ({
    currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
    askQuestion: question => dispatch(askQuestion(question))
})

export default connect(mapStateToProps, mapDispatchToProps)(AskQuestion)