import { connect } from "react-redux";
import CommentIndex from "./comment_index";
import { showComments } from "../../actions/comment_actions";


const mapStateToProps = (state, ownProps) => ({
    answerId: ownProps.answerId,
    comments: state.entities.comments
})



export default connect(mapStateToProps, null)(CommentIndex);