import { connect } from "react-redux";
import EntryForm from "./entry_form";
import { signInUser } from "../../actions/session_actions";
import { createUser } from "../../actions/user_actions";

const mapStateToProps = state => ({
    loginErrors: state.errors.login,
    sessionErrors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(signInUser(user)),
    signup: user => dispatch(createUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(EntryForm)