import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";


class SearchResultsItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant_id: this.props.result.id,
            time: "",
            date: this.props.result.reservation_date,
            party_size: this.props.result.party_size
        };
        this.changeTime = this.changeTime.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    // componentDidMount () {
    
    //   const id = this.props.result.id;
    //   const party_size = this.props.result.party_size;
    //   const date = this.props.result.date;
    //   const time = this.props.result.time;
    //   this.props.getHours([id, party_size, date, time]);
    // }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.searchRestaurant(this.state);

        this.props.history.push('/confirmation');
    }
    
    changeTime(res_time) {
        this.setState({ time: res_time});
    }

    render() {
        
        if (!this.props.result) {
            return null;
        }
        

        const logoPic = this.props.result.name.substring(0,2) + "4";
        
        const dollar_sign = this.props.result.price_range === "Under $10" ? "$" : (this.props.result.price_range === "$10-$25" ? "$$" : "$$$");

        // const filteredReviews = Object.values(this.props.reviews).filter(object => object.restaurant_id === this.props.result.id);
        // debugger
        // // const firstReview = filteredReviews[0].review_body;
        
        const res_time = this.props.result.reservation_time;

        const hours = parseInt(res_time.split(":")[0]);
        const amPM = res_time[res_time.length - 2] + res_time[res_time.length - 1];
        const times = [hours - 1, hours - 0.5, hours, hours + 0.5, hours + 1, hours + 1.5];
     
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

                        <div>
                            {
                            times.map(hour => (
                                <div className="reservation-times" onMouseEnter={()=>this.changeTime(hour)}>
                                     <button onClick={this.handleSubmit}>{hour}</button>
                                </div>
                            ))
                            }
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
//         hours: state.entities.hours

//         // reviews: Object.values(state.entities.reviews),
//         // results: state.entities.restaurants
//     };
// };

// // const mDTP = (dispatch) => {
// //     return {
// //         getReviews: (restaurantId) => dispatch(getReviews(restaurantId)),
// //     };
// // };

// export default connect(mSTP, null)(SearchResultsItem);