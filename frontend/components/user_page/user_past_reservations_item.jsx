import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from 'react-router';

class PastReservationItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        debugger
    
        // const logoPic = this.props.result.name.substring(0,2) + "4";
        
        // const dollar_sign = this.props.result.price_range === "Under $10" ? "$" : (this.props.result.price_range === "$10-$25" ? "$$" : "$$$");

        // // const filteredReviews = Object.values(this.props.reviews).filter(object => object.restaurant_id === this.props.result.id);
        // // debugger
        // // // const firstReview = filteredReviews[0].review_body;
        
        // const res_time = this.props.result.reservation_time;

        // const hours = parseInt(res_time.split(":")[0]);
        // const amPM = res_time[res_time.length - 2] + res_time[res_time.length - 1];
        // const times = [hours - 1, hours - 0.5, hours, hours + 0.5, hours + 1, hours + 1.5];

        // const elevenAM = ["10:00AM", "10:30AM", "11:00AM", "11:30AM", "12:00PM", "12:30PM"].map( (time) => {
        //         return (
        //        <div className="reservation-times" onMouseEnter={()=>this.changeTime(time)}>
        //             <button onClick={this.handleSubmit}>{time}</button>
        //         </div>
        //         )
        // })
        // const noon = ["11:00AM", "11:30AM", "12:00PM", "12:30PM", "1:00PM", "1:30PM"].map( (time) => {
        //         return (
        //        <div className="reservation-times" onMouseEnter={()=>this.changeTime(time)}>
        //             <button onClick={this.handleSubmit}>{time}</button>
        //         </div>
        //         )
        // })
        // const onePM = ["12:00PM", "12:30PM", "1:00PM", "1:30PM", "2:00PM", "2:30PM"].map( (time) => {
        //         return (
        //        <div className="reservation-times" onMouseEnter={()=>this.changeTime(time)}>
        //             <button onClick={this.handleSubmit}>{time}</button>
        //         </div>
        //         )
        // })


        
        // const normalbutton = times.map( (hour, i) => {
        //     if (i % 2 === 0) 
        //         return (
        //         <div className="reservation-times" onMouseEnter={()=>this.changeTime(hour + ":00" + amPM)}>
        //             <button onClick={this.handleSubmit}>{hour + ":00" + amPM}</button>
        //         </div>
        //         ) 
        //     else
        //         return (
        //         <div className="reservation-times" onMouseEnter={()=>this.changeTime(hour.toString()[0] + ":30" + amPM)}>
        //             <button onClick={this.handleSubmit}>{hour.toString()[0] + ":30" + amPM}</button>
        //         </div>
        //         ) 
        // })



        
        return (
                    <div className="results-item">
                    
                        {/* <div className="pic-container">
                          <Link to={`/restaurants/${this.props.result.id}`}><img className="food-pic" src={window[`${logoPic}`]} alt="food" /></Link>

                        </div>

                        <div className="info">
                            <Link to={`/restaurants/${this.props.result.id}`}><p>{this.props.result.name}</p></Link>
                            <p>
                                <span>{dollar_sign}</span> &middot; <span>{this.props.result.cuisine}</span> &middot; <span>{this.props.result.neighborhood}</span> 
                            </p>
                            <p>{this.props.result.recent_review.review_body}</p>
                        </div>

                        <div className="">
                            {
                                (hours === 11 && amPM == "AM") ? elevenAM : (((hours === 12 && amPM == "PM") ? noon : ((hours === 1 && amPM == "PM") ? onePM : normalbutton)))
                     
        
                            }
                        </div> */}

                    </div>
        )
    }

}


export default PastReservationItem;
