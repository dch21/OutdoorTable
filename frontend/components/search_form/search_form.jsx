import React from "react";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "Location, Restaurant, or Cuisine"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.searchRestaurant(this.state.searchTerm);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    clear(field) {
        return e => this.setState({ [field]: "" });
    }

    render() {

        return (
            <div className="splash-banner"> 
                <form onSubmit={this.handleSubmit}>
                    <br />
                        <div>
                            <h3>Find your table for outdoor dining</h3>
                            <img className="splash-image" src={window.splashImageURL} alt="people eating"/>
                            <input type="text"
                                value={this.state.searchTerm}
                                onClick={this.clear("searchTerm")}
                                onChange={this.update("searchTerm")}
                            />
                            <button className="form-button" type="submit">Let's go</button>
                        </div>
                    
                    <br />
                </form>

            </div>
        )
    }

}

export default SearchForm;