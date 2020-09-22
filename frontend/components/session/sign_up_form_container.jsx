import { connect } from "react-redux";
import SessionFrom from "./session_form";
import { signUp } from "../../actions/session_actions";

const mSTP = (state, ownProps) => {
    return {
        formType: "Sign Up",
        errors: state.errors.session
    };
}

const mDTP = (dispatch) => {
    return {
        action: (formUser) => dispatch(signUp(formUser))
    };
};

export default connect(mSTP, mDTP)(SessionFrom);