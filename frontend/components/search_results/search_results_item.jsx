import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from 'react-router';



class SearchResultsItem extends React.Component {
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
        
        if (this.props.result.reservation_date === null) {
            return null;
        }
        
 
        const ratingAsFloat = parseFloat(this.props.result.rating);
        const width = ratingAsFloat / 5.0;

        const stars = [0,1,2,3,4].map(star => {
            return <span className="fa fa-star checked"></span>
        });

    

        const logoPic = this.props.result.name.substring(0,2) + "4";
        
        const dollar_sign = this.props.result.price_range === "Under $10" ? "$" : (this.props.result.price_range === "$10-$25" ? "$$" : "$$$");

    
        
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
                    
                        <div className="pic-container">
                          <Link to={`/restaurants/${this.props.result.id}`}><img className="food-pic" src={window[`${logoPic}`]} alt="food" /></Link>

                        </div>

                        <div className="info">
                            <Link to={`/restaurants/${this.props.result.id}`}><p>{this.props.result.name}</p></Link>
                            <p>
                                <span>{dollar_sign}</span> &middot; <span>{this.props.result.cuisine}</span> &middot; <span>{this.props.result.neighborhood}</span> 
                            </p>
                             <div className="splash-reviews">
                                <div className="splash-stars" style={{width: `${90 *width}px`}}>
                                    {stars}
                                </div>
                                <div className="splash-reviews-label">
                                    &middot; {` ${this.props.result.number_reviews} Reviews`}
                                </div>
                            </div>
                        
                            <p>{this.props.result.recent_review.review_body}</p>
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


export default withRouter(SearchResultsItem);
