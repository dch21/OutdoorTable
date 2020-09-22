import React from "react";
import { Route } from "react-router-dom";
import SignUpFormContainer from "./session/sign_up_form_container";
import SignInFormContainer from "./session/sign_in_form_container";

const App = () => (
    <div>
        <h1>OutsideTable</h1>
        <Route path="/signup" component={SignUpFormContainer} />
        <Route path="/signin" component={SignInFormContainer} />
    </div>

)

export default App;