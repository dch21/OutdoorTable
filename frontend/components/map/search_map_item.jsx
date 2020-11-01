import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from 'react-router';



class SearchMapItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant_id: this.props.result.id,
            time: "",
            date: this.props.result.reservation_date,
            party_size: this.props.result.party_size,
            name: this.props.result.name,
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
        if (!this.props.currentUser) {
            this.props.openModal("signIn");
            return;
        }
        this.props.pendingReservation(this.state);
        this.props.history.push('/confirmation/');
    }
    
    changeTime(res_time) {
        this.setState({ time: res_time});
    }

    render() {
        
        if (!this.props.result) {
            return null;
        }
        
        const ratingAsFloat = parseFloat(this.props.result.rating);

        const filledStars = ratingAsFloat ?  Array(Math.floor(ratingAsFloat)).fill("star") : [];
        const stars = filledStars.map(star => {
            return <span className="fa fa-star checked"></span>
        });

        const halfStars = ["half"].map(star => {
            return <span className="fa fa-star-half-full"></span>
        });

        const logoPic = this.props.result.name.substring(0,2) + "4";
        
        const dollar_sign = this.props.result.price_range === "Under $10" ? "$" : (this.props.result.price_range === "$10-$25" ? "$$" : "$$$");

        // const filteredReviews = Object.values(this.props.reviews).filter(object => object.restaurant_id === this.props.result.id);
        // debugger
        // // const firstReview = filteredReviews[0].review_body;
        
        const res_time = this.props.result.reservation_time;

        const hours = parseInt(res_time.split(":")[0]);
        const amPM = res_time[res_time.length - 2] + res_time[res_time.length - 1];
        const times = [hours - 1, hours - 0.5, hours, hours + 0.5, hours + 1, hours + 1.5];

        const elevenAM = ["10:00AM", "10:30AM", "11:00AM", "11:30AM", "12:00PM", "12:30PM"].map( (time) => {
                return (
               <div className="reservation-times" onMouseEnter={()=>this.changeTime(time)}>
                    <button onClick={this.handleSubmit}>{time}</button>
                </div>
                )
        })
        const noon = ["11:00AM", "11:30AM", "12:00PM", "12:30PM", "1:00PM", "1:30PM"].map( (time) => {
                return (
               <div className="reservation-times" onMouseEnter={()=>this.changeTime(time)}>
                    <button onClick={this.handleSubmit}>{time}</button>
                </div>
                )
        })
        const onePM = ["12:00PM", "12:30PM", "1:00PM", "1:30PM", "2:00PM", "2:30PM"].map( (time) => {
                return (
               <div className="reservation-times" onMouseEnter={()=>this.changeTime(time)}>
                    <button onClick={this.handleSubmit}>{time}</button>
                </div>
                )
        })


        
        const normalbutton = times.map( (hour, i) => {
            if (i % 2 === 0) 
                return (
                <div className="reservation-times" onMouseEnter={()=>this.changeTime(hour + ":00" + amPM)}>
                    <button onClick={this.handleSubmit}>{hour + ":00" + amPM}</button>
                </div>
                ) 
            else
                return (
                <div className="reservation-times" onMouseEnter={()=>this.changeTime(hour.toString().split(".")[0] + ":30" + amPM)}>
                    <button onClick={this.handleSubmit}>{hour.toString().split(".")[0] + ":30" + amPM}</button>
                </div>
                ) 
        })



        
        return (
                    <div className="results-item">
                    
                        <div>
                          <Link to={`/restaurants/${this.props.result.id}`}><img className="map-food-pic" src={window[`${logoPic}`]} alt="food" /></Link>
                        </div>

                        <div className="map-info">
                            <Link to={`/restaurants/${this.props.result.id}`}><p>{this.props.result.name}</p></Link>
                            <p>
                                <span>{dollar_sign}</span> &middot; <span>{this.props.result.cuisine}</span> &middot; <span>{this.props.result.neighborhood}</span> 
                            </p>
                            <div className="map-stars">
                                {stars}{halfStars} &middot; {`${this.props.result.number_reviews} Reviews`}
                            </div>
                            <div className="search-time-buttons">
                                {
                                    (hours === 11 && amPM == "AM") ? elevenAM : (((hours === 12 && amPM == "PM") ? noon : ((hours === 1 && amPM == "PM") ? onePM : normalbutton)))
                                }
                            </div>
                        </div>
                    </div>
        )
    }

}

// {/* <h3>{Object.values(this.props.reviews)[0].review_body}</h3> */ }
// {/* <h3>{firstReview}</h3> */ }
export default withRouter(SearchMapItem);


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