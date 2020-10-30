import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import SignUpFormContainer from "../session/sign_up_form_container";
import SignInFormContainer from "../session/sign_in_form_container"; 
import ModelSearchContainer from "../search_form/model_search_container";

function Modal(props) {

    if (!props.modal) {
        return null;
    }

    let form;
    switch (props.modal) {
        case "signIn":
            form = <SignInFormContainer/>
            break;
        case "signUp":
            form = <SignUpFormContainer />
            break;
        case "search":
            form = <ModelSearchContainer />
            break;
        default:
            return null;
    }

    return (
        <div className="modal-screen" onClick={props.closeModal}>
            <div className={props.modal === "search" ? "modal-search" : "modal-form"} onClick={ e => e.stopPropagation()}>
                {form}  
            </div>
        </div>
    )
}

const mSTP = (state) => {
    return {
        modal: state.ui.modal
    };
};

const mDTP = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(Modal);



