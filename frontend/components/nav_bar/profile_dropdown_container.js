import { connect } from "react-redux";
import { signOutUser } from "../../actions/session_actions";
import ProfileDropdown from "./profile_dropdown";

const mapStateToProps = state => ({
    currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
    signOutUser: () => dispatch(signOutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown);