import React from "react";
import { Link } from 'react-router-dom';

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
                // debugger
                past.push(reservation);
            } else {
                upcoming.push(reservation);
            }
        });


        debugger
        
        return (
            <div>
                <h1>{this.props.userFirstName}</h1>

                <div className="user-page-container">
                    <div className= "user-page-sidebar">
                        <ul>
                            <li><p>Reservations</p></li>
                            <li><p>Saved Restaurants</p></li>
                        </ul>
                    </div>

                    <div className="user-page-reservations-container">
                        <div className= "user-page-upcoming">
                            <h2>Upcoming Reservations</h2>
                        </div>

                        <div className= "user-page-past">
                            <h2>Past Reservations</h2>
                        </div>
                    </div>

                </div>
            </div>
            
        )
    }

}

export default UserPage;