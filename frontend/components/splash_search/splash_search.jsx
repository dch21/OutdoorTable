import React from "react";
import SearchFormContainer from "../search_form/search_form_container";


class SplashSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="splash-banner"> 
                <div className="splash-banner-container">
                    <h2>Find your Table for Outdoor Dining</h2>
                        <img className="splash-image" src={window.splashImageURL} alt="people eating"/>
                    <div>
                        <SearchFormContainer/>
                    </div>
                </div>
                    
            </div>
        )
    }

}

export default SplashSearch;