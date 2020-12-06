import React from "react";
import { connect } from "react-redux";
import SessionFrom from "./session_form";
import { signUp, clearErrors } from "../../actions/session_actions";
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
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mSTP, mDTP)(SessionFrom);