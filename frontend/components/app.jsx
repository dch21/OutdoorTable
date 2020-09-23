import React from "react";
import { Route } from "react-router-dom";
import SignUpFormContainer from "./session/sign_up_form_container";
import SignInFormContainer from "./session/sign_in_form_container";
import NavBarContainer from "./navbar/navbar_container";
import { AuthRoute } from "../util/route";
import Modal from "./modal/modal";
import SearchForm from "./search_form/search_form";
import RestaurantShowContainer from "./restaurant/restaurant_show_container";

const App = () => (
    <div>
        <Modal />
        <Route path="/" component={NavBarContainer} />
        <Route path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
        <SearchForm />
    </div>
)

export default App;

// const App = () => (
//     <div>
//         <h1>OutsideTable</h1>
//         <Route path="/" component={NavBarContainer} />
//         <AuthRoute path="/signup" component={SignUpFormContainer} />
//         <AuthRoute path="/signin" component={SignInFormContainer} />
//     </div>
// )