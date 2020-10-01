import React from 'react';
import { Link } from 'react-router-dom';

class SearchResultsItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount () {
        debugger
      this.props.getReviews(this.props.result.id);
    }
    
    render () {

        if (!this.props.review) {
            return null;
        }

        const logoPic = this.props.result.name.substring(0,2) + "4";

        const dollar_sign = this.props.result.price_range === "Under $10" ? "$" : (this.props.result.price_range === "$10-$25" ? "$$" : "$$$")

        // const review = this.props.reviews
        // debugger
        return (
            <div className="search-result-item">
                <img className="food-pic" src={window[`${logoPic}`]} alt="food" />
                <div>
                    <Link to={`/restaurants/${this.props.result.id}`}>{this.props.result.name}</Link>
                    <br/>
                    <span>{dollar_sign}</span> &middot; <span>{this.props.result.cuisine}</span>
                    <h3>{this.props.review["review_body"]}</h3>
                </div>
            </div>
        )
    }

}
export default SearchResultsItem;