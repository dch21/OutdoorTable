import React from "react";
import { Link } from 'react-router-dom';
import PastReservationItem from "./user_past_reservations_item";
import UpcomingReservationItem from "./user_upcoming_reservations_item";

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.requestReservations(this.props.userId);
    }


    render() {

        if (!this.props.reservations) {
            return null;
        }

        const reservations = this.props.reservations;
        let upcoming = [];
        let past = [];

        let currentDate = new Date();

        reservations.forEach( (reservation) => {
            let date = new Date(reservation.date + "T00:00:00");
            let splitTime = reservation.time.split(":");
            let amPM = splitTime[1].slice(2,4);
            let hours = parseInt(splitTime[0]);
            let minutes = parseInt(splitTime[1].slice(0,2));

            if (amPM === "PM" && hours !== 12) {
                hours += 12;
            }
            
            date.setHours(hours);
            date.setMinutes(minutes);

            
            if (date <= currentDate) {
                past.push(reservation);
            } else {
                upcoming.push(reservation);
            }
        });
        
        
        return (
            <div>
                <h1 className="user-name">Hi, {this.props.userFirstName}</h1>

                <div className="user-page-container">
                    <div className= "user-page-sidebar">
                        <ul>
                            <li><p>Reservations</p></li>
                            <li><Link className="user-page-link" to={`/favorites/${this.props.userId}`}>Saved Restaurants</Link></li>
                        </ul>
                    </div>

                    <div className="user-page-reservations-container">
                        <div className= "user-page-upcoming">
                            <h2>Upcoming Reservations</h2>
                            <hr/>
                            <div className="user-page-upcoming-items">
                               {
                               upcoming.map(upRes => (
                                <UpcomingReservationItem upRes={upRes}
                                key={upRes.id}
                                deleteReservation={this.props.deleteReservation}
                                />
                                ))
                               }
                            </div>

                        </div>

                        <div className= "user-page-past">
                            <h2>Past Reservations</h2>
                            <hr/>
                            <div className="user-page-past-items">
                            {
                                past.map(pastRes => (
                                <PastReservationItem pastRes={pastRes}
                                key={pastRes.id}
                                getThirtyDays={this.props.getThirtyDays}
                                pendingReview={this.props.pendingReview}
                                userId={this.props.userId}
                                />
                                ))
                            }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        )
    }

}

export default UserPage;