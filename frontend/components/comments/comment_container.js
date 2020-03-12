import { connect } from "react-redux";
import CommentIndex from "./comment_index";
import { showComments, createComment } from "../../actions/comment_actions";


const mapStateToProps = (state, ownProps) => ({
        answerId: ownProps.answerId,
        comments: state.entities.comments,
        currentUser: state.session.currentUser
})


const mapDispatchToProps = dispatch => ({
    createComment: comment => dispatch(createComment(comment)),
    showComments: questionId => dispatch(showComments(questionId))
})


export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);