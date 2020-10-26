import React from "react";
import { Link } from 'react-router-dom';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

  

    render() {
        
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