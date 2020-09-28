import React from "react";
import RestaurantDetailSidebar from "./restaurant_detail_sidebar";
import CreateReservationContainer from "../reservations/create_reservation_container";
import RestaurantShowMap from "./restaurant_show_map";
import ReviewsListContainer from "../reviews_list/reviews_list_container";
import AggregatesContainer from "../ratings_aggregates/aggregates_container";
import RestaurantPhotos from "./restaurant_photos";



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

        const logoPic = this.props.restaurant.name.substring(0, 4) + "4";


        return (
            <div>
                <div className="form-header">
                    <img className="food-pic" src={window[`${logoPic}`]} alt="food" />
                    <h1>{this.props.restaurant.name}</h1>
                    <hr className="solid"></hr>
                </div>

                <div className="parent-form"> 

                    

                    <div className="show-page">
                        <i className="far fa-comments"><span> {this.props.aggregates[0]} Reviews</span></i>
                        <i className="fas fa-money-bill-wave"></i><span>{this.props.restaurant.price_range}</span><i className="fas fa-cookie-bite"></i><span>{this.props.restaurant.cuisine}</span>
                        <h3>{this.props.restaurant.description}</h3>
                        {safety}
                        <div>
                            <RestaurantPhotos name={this.props.restaurant.name} />
                        </div>
                        <div>
                            <AggregatesContainer />
                        </div>
                        <ReviewsListContainer/>
                    </div>

                    <div className="reservation-form-container">
                        <CreateReservationContainer />
                    </div>

                    <div>
                        {/* <RestaurantShowMap restaurant={this.props.restaurant}/> */}
                        <RestaurantDetailSidebar restaurant={this.props.restaurant}/>
                    </div>


                </div>

            </div>
        )
    }

}

export default RestaurantShow;


