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
import ConfirmationForm from "./reservations/confirmation_form";
import SplashSixContainer from "./splash_six/splash_six_container";
import SplashSearch from "./splash_search/splash_search";
import Footer from "./footer/footer";
import UserPageContainer from "./user_page/user_page_container";
import ReviewsConfirmationFormContainer from "./reviews_list/reviews_confirmation_form_container";
import FavoritesContainer from "./favorites_page/favorites_page_container";
import SearchMap from "./map/search_map";
import SplashCarouselContainer from "./splash_carousel/splash_carousel_container";



const App = () => (
    <div>
        <Modal />
        <Route path="/" component={NavBarContainer} />
        <Route exact path="/" component={SplashSearch} />
        <Switch>
            <Route path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
        </Switch>
        <Route path="/search" component={SearchResults} />
        <Route path="/searchmap" component={SearchMap} />
        <Route path="/confirmation" component={ConfirmationForm} />
        <Route path="/users/:userId" component={UserPageContainer} />
        <Route path="/favorites/:userId" component={FavoritesContainer} />
        <Route path="/reviews/create" component={ReviewsConfirmationFormContainer} />
        <Route exact path="/" component={SplashCarouselContainer}/>
        <Route exact path="/" component={SplashSixContainer}/>
        <Footer/> 
    </div>
)

export default App;

