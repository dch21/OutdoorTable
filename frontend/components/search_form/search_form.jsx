import React from "react";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="splash-banner"> 
                <img className="splash-image" src={window.splashImageURL} alt="people eating"/>
            </div>
        )
    }

}

export default SearchForm;