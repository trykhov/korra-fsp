import { connect } from "react-redux";
import { signOutUser } from "../../actions/session_actions";
import ProfileDropdown from "./profile_dropdown";

const mapDispatchToProps = dispatch => ({
    signOutUser: () => dispatch(signOutUser())
})

export default connect(null, mapDispatchToProps)(ProfileDropdown);