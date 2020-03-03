import { connect } from "react-redux";
import EntryForm from "./entry_form";
import { signInUser } from "../../actions/session_actions";
import { createUser } from "../../actions/user_actions";

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(signInUser(user)),
    signup: user => dispatch(createUser(user))
})

export default connect(null, mapDispatchToProps)(EntryForm)