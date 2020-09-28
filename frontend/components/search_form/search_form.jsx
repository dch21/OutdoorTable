import React from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from 'react-router';


class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "Location, Restaurant, or Cuisine",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.searchRestaurant(this.state.searchTerm);
        
        this.props.history.push('/search');
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    clear(field) {
        return e => this.setState({ [field]: "" });
    }

    render() {

        return (
            <div> 
                <form onSubmit={this.handleSubmit}>
                    <br />
                        <div>
                           
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

export default withRouter(SearchForm);