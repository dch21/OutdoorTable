import { connect } from "react-redux";
import Navbar from "./navbar";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state) => {
    return {
        currentUser: state.session.id,
        firstName: state.entities.users[state.session.id] ? state.entities.users[state.session.id].first_name : ""
    };
};

const mDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(mSTP, mDTP)(Navbar);