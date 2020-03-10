import { connect } from "react-redux";
import Homepage from "./homepage";
import { fetchAllQuestions } from "../../actions/question_actions";


const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    questions: Object.values(state.entities.questions)
})

const mapDispatchToProps = dispatch => ({
    fetchAllQuestions: () => dispatch(fetchAllQuestions())
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);