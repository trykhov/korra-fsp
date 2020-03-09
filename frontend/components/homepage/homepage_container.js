import { connect } from "react-redux";
import Homepage from "./homepage";

const mapStateToProps = state => ({
    currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);