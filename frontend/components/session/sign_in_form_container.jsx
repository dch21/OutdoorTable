import React from "react";
import { connect } from "react-redux";
import SessionFrom from "./session_form";
import { signIn } from "../../actions/session_actions";
import {openModal, closeModal} from "../../actions/modal_actions";

const mSTP = (state) => {
    return {
        formType: "Please Sign In",
        errors: state.errors.session,
    };
}

const mDTP = (dispatch) => {
    return {
        action: (formUser) => dispatch(signIn(formUser)),
        otherForm: (
            <button onClick={() => dispatch(openModal("signIn")) }>Sign In</button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(SessionFrom);