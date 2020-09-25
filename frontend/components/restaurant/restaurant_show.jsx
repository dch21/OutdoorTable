import React from "react";
import RestaurantDetailSidebar from "./restaurant_detail_sidebar";
import CreateReservationContainer from "../reservations/create_reservation_container";


class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getRestaurant(this.props.restaurantId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.restaurantId !== prevProps.match.params.restaurantId ) {
            this.props.getRestaurant(this.props.restaurantId);
        }
    }

    render() {

        if (!this.props.restaurant) {
            return null;
        }

        const safety = 
        (<ul>COVID-19 Precautions
            <li>Deep cleaning daily between and after shifts</li>
            <li>Sanitizer and wipes provided</li>
            <li>Socially Distance Tables</li>
            <li>Facemasks required unless eating</li>
        </ul>)


        return (
            <div >
                <img className="splash-image" src={window.union_square} alt="park" />
                <h1>{this.props.restaurant.name}</h1>
                <hr className="solid"></hr>
                <i className="fas fa-comment-alt">Reviews</i>
                <i className="fas fa-money-bill-wave"></i>{this.props.restaurant.price_range}<i className="fas fa-cookie-bite">{this.props.restaurant.cuisine}</i>
                <h3>{this.props.restaurant.description}</h3>
                {safety}
                <RestaurantDetailSidebar restaurant={this.props.restaurant}/>
                <CreateReservationContainer />
            </div>
        )
    }

}

export default RestaurantShow;


