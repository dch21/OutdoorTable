import React from "react";
import { connect } from "react-redux";
import UserDropdown from "./user_dropdown";

const mSTP = (state) => {
    return {
        userId: state.session.id,
    };
};
 

export default connect(mSTP, null)(UserDropdown);