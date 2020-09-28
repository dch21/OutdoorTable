import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import SignUpFormContainer from "./session/sign_up_form_container";
import SignInFormContainer from "./session/sign_in_form_container";
import NavBarContainer from "./navbar/navbar_container";
import { AuthRoute } from "../util/route";
import Modal from "./modal/modal";
import SearchFormContainer from "./search_form/search_form_container";
import RestaurantShowContainer from "./restaurant/restaurant_show_container";
import SearchResults from "./search_results/search_results_container";
import SplashSix from "./splash_six/splash_six";
import SplashSearch from "./splash_search/splash_search";
// import CreateReservationContainer from "./reservations/create_reservation_container";


const App = () => (
    <div>
        <Modal />
        <Route path="/" component={NavBarContainer} />
        <Route exact path="/" component={SplashSearch} />
        <Switch>
            <Route path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
            {/* <SearchFormContainer /> */}
        </Switch>
        <Route path="/search" component={SearchResults} />
        {/* <SearchResults/> */}
        <Link to="/restaurants/5">Sample Show Page in Progress</Link>
        <Route exact path="/" component={SplashSix}/>
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