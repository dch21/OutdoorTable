import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from 'react-router';

class RestaurantShowButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant_id: this.props.result.id,
            time: "",
            date: this.props.result.date,
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
        // debugger
        // this.props.pendingReservation(this.state);
        this.props.pendingReservation({
            restaurant_id: this.props.result.id,
            time: e.target.innerText,
            date: this.props.result.date,
            party_size: this.props.result.party_size,
            name: this.props.result.name,
        });
        this.props.history.push('/confirmation/');
    }
    
    changeTime(res_time) {
        this.setState({ time: res_time});
    }

    render() {
        
        if (!this.props.result) {
            return null;
        }
        
        const res_time = this.props.result.time;

        const hours = parseInt(res_time.split(":")[0]);
        const amPM = res_time[res_time.length - 2] + res_time[res_time.length - 1];
        const times = [hours - 1, hours - 0.5, hours, hours + 0.5, hours + 1, hours + 1.5];

        const elevenAM = ["10:00AM", "10:30AM", "11:00AM", "11:30AM", "12:00PM", "12:30PM"].map( (time) => {
                return (
               <div className="restaurant-show-times" onMouseEnter={()=>this.changeTime(time)}>
                    <button onMouseEnter={()=>this.changeTime(time)} onClick={this.handleSubmit}>{time}</button>
                </div>
                )
        })
        const noon = ["11:00AM", "11:30AM", "12:00PM", "12:30PM", "1:00PM", "1:30PM"].map( (time) => {
                return (
               <div className="restaurant-show-times" onMouseEnter={()=>this.changeTime(time)}>
                    <button onClick={this.handleSubmit}>{time}</button>
                </div>
                )
        })
        const onePM = ["12:00PM", "12:30PM", "1:00PM", "1:30PM", "2:00PM", "2:30PM"].map( (time) => {
                return (
               <div className="restaurant-show-times" onMouseEnter={()=>this.changeTime(time)}>
                    <button onClick={this.handleSubmit}>{time}</button>
                </div>
                )
        })


        
        const normalbutton = times.map( (hour, i) => {
            if (i % 2 === 0) 
                return (
                <div className="restaurant-show-times" onMouseEnter={()=>this.changeTime(hour + ":00" + amPM)}>
                    <button onClick={this.handleSubmit}>{hour + ":00" + amPM}</button>
                </div>
                ) 
            else
                return (
                <div className="restaurant-show-times" onMouseEnter={()=>this.changeTime(hour.toString().split(".")[0] + ":30" + amPM)}>
                    <button onClick={this.handleSubmit}>{hour.toString().split(".")[0] + ":30" + amPM}</button>
                </div>
                ) 
        })

        return (
                    <div className="rest-time">
                        <div className="rest-time-buttons">
                            {
                                (hours === 11 && amPM == "AM") ? elevenAM : (((hours === 12 && amPM == "PM") ? noon : ((hours === 1 && amPM == "PM") ? onePM : normalbutton)))
                            }
                        </div>
                    </div>
        )
    }

}


export default withRouter(RestaurantShowButtons);


