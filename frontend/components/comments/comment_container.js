import { connect } from "react-redux";
import CommentIndex from "./comment_index";
import { showComments } from "../../actions/comment_actions";


const mapStateToProps = (state, ownProps) => ({
    answerId: ownProps.answer.id,
    comments: state.entities.comments
})


const mapDispatchToProps = dispatch => ({
    showComments: answerId => dispatch(showComments(answerId)),
})


export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex)