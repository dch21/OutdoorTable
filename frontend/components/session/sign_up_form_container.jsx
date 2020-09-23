import React from "react";
import { connect } from "react-redux";
import SessionFrom from "./session_form";
import { signUp } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
    return {
        formType: "Sign Up",
        errors: state.errors.session
    };
}

const mDTP = (dispatch) => {
    return {
        action: (formUser) => dispatch(signUp(formUser)),
        // otherForm: (
        //     <button onClick={() => dispatch(openModal("signUp"))}>Sign Up</button>
        // ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(SessionFrom);