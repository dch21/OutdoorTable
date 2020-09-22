import { connect } from "react-redux";
import Navbar from "./navbar";
import { logout } from "../../actions/session_actions";

const mSTP = (state) => {
    return {
        currentUser: state.session.id
    };
};

const mDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(mSTP, mDTP)(Navbar);