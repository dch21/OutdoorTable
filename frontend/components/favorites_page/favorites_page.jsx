import React from "react";
import { Link } from 'react-router-dom';
import FavoritesItem from "./favorites_item";

class FavoritesPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestFavorites(this.props.userId);
    }

    render() {

        if (!this.props.favorites) {
            return null;
        }

        return (
            <div>
                <h1>{this.props.userFirstName}</h1>

                <div className="user-page-container">
                    <div className= "user-page-sidebar">
                        <ul>
                            <li><Link to={`/users/${this.props.userId}`}>Reservations</Link></li>
                            <li><p>Saved Restaurants</p></li>
                        </ul>
                    </div>

                    <div className="user-page-reservations-container">
                        <div className= "user-page-upcoming">
                            <h2>Saved Restaurants</h2>
                            <hr/>
                            <div className="user-page-upcoming-items">
                               {
                               this.props.favorites.map(restaurant => (
                                <FavoritesItem restaurant={restaurant}
                                userId={this.props.userId}
                                key={restaurant.id}
                                // deleteReservation={this.props.deleteReservation}
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

export default FavoritesPage;