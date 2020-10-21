import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";


class SearchResultsItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    // componentDidMount () {
    //     debugger
    //   console.log("1")
    // }
    
    render () {
        
        if (!this.props.result) {
            return null;
        }

        const logoPic = this.props.result.name.substring(0,2) + "4";
        
        const dollar_sign = this.props.result.price_range === "Under $10" ? "$" : (this.props.result.price_range === "$10-$25" ? "$$" : "$$$");

        // const filteredReviews = Object.values(this.props.reviews).filter(object => object.restaurant_id === this.props.result.id);
        // debugger
        // // const firstReview = filteredReviews[0].review_body;
     
        return (
                    <div className="results-item">
                    
                        <div className="pic-container">
                          <Link to={`/restaurants/${this.props.result.id}`}><img className="food-pic" src={window[`${logoPic}`]} alt="food" /></Link>

                        </div>

                        <div className="info">
                            <Link to={`/restaurants/${this.props.result.id}`}><p>{this.props.result.name}</p></Link>
                            <p>
                                <span>{dollar_sign}</span> &middot; <span>{this.props.result.cuisine}</span> &middot; <span>{this.props.result.neighborhood}</span> 
                            </p>
                            <p>{this.props.result.recent_review.review_body}</p>
                        </div>
                    </div>
        )
    }

}

// {/* <h3>{Object.values(this.props.reviews)[0].review_body}</h3> */ }
// {/* <h3>{firstReview}</h3> */ }
export default SearchResultsItem;


// import { getReviews } from "../../actions/reviews_actions";

// const mSTP = (state) => {
//     return {
//         reviews: Object.values(state.entities.reviews),
//         // results: state.entities.restaurants
//     };
// };

// // const mDTP = (dispatch) => {
// //     return {
// //         getReviews: (restaurantId) => dispatch(getReviews(restaurantId)),
// //     };
// // };

// export default connect(mSTP, null)(SearchResultsItem);