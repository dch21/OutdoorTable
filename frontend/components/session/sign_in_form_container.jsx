import { connect } from "react-redux";
import SessionFrom from "./session_form";
import { signIn } from "../../actions/session_actions";

const mSTP = (state, ownProps) => {
    return {
        formType: "Please Sign In",
        errors: state.errors.session
    };
}

const mDTP = (dispatch) => {
    return {
        action: (formUser) => dispatch(signIn(formUser))
    };
};

export default connect(mSTP, mDTP)(SessionFrom);