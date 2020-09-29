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
        // fix stars here
        this.props.getAggregates(this.props.restaurantId);
        this.props.getRestaurant(this.props.restaurantId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.restaurantId !== prevProps.match.params.restaurantId ) {
            this.props.getRestaurant(this.props.restaurantId);
        }
    }

    render() {
        
        
        if (!this.props.restaurant || !this.props.aggregates) {
            return null;
        }

        // fix stars here
        // const ratingAsFloat = parseFloat(this.props.aggregates[1]);

        // const filledStars = Array(Math.floor(ratingAsFloat)).fill("star");
        // const stars = filledStars.map(star => {
        //     return <span className="fa fa-star checked"></span>
        // });

        // const halfStars = ["half"].map(star => {
        //     return <span className="fa fa-star-half-full"></span>
        // });

        // const unfilledStars = Array(5 - (Math.floor(ratingAsFloat)) - 1).fill("no star");
        // const noStars = unfilledStars.map(star => {
        //     return <span className="fa fa-star clear"></span>
        // });


        const safety = 
            (<div>
                <h2>COVID-19 Precautions</h2>
                <hr/>
                <ul>  
                    <li>Deep cleaning daily between and after shifts</li>
                    <li>Sanitizer and wipes provided</li>
                    <li>Socially Distanced Tables</li>
                    <li>Facemasks required unless eating</li>
                </ul>

            </div>)

        const logoPic = this.props.restaurant.name.substring(0, 4) + "4";


        return (
            <div className="show-container">
                <div className="form-header">
                    <img className="logo-banner" src={window.border} alt="food" />
                    
                </div>

                
                <div className="parent-form"> 
                    

                    <div className="restaurant-info">
                        <h1>{this.props.restaurant.name}</h1>
                        <hr className="solid"></hr>
                        <i className="far fa-comments"><span> {this.props.aggregates[0]} Reviews</span></i>
                        <i className="fas fa-money-bill-wave"></i><span>{this.props.restaurant.price_range}</span><i className="fas fa-cookie-bite"></i><span>{this.props.restaurant.cuisine}</span>
                        <p>{this.props.restaurant.description}</p>
                        <br/>
                        {safety}
                        <br/>
                        
                        <div>
                            <h2>Photos</h2>
                            <RestaurantPhotos name={this.props.restaurant.name} />
                        </div>
                        <br/>

                        <div>
                            <h2>Menu</h2>
                            <hr/>
                            <a href="">Restaurant Menu</a>
                        </div>
                        <br/>
                        <br/>

                        <div>
                            <AggregatesContainer />
                        </div>
                        <br/>

                        <div>
                            <h2>Reviews</h2>
                            <hr />
                            <ReviewsListContainer/>
                        </div>
                        
                    </div>

                    <div className="reservation-form-container">
                        <CreateReservationContainer />
                    </div>

                    <div className="restaurant-sidebar">
                        {/* <RestaurantShowMap restaurant={this.props.restaurant}/> */}
                        <RestaurantDetailSidebar restaurant={this.props.restaurant}/>
                    </div>


                </div>

            </div>
        )
    }

}

export default RestaurantShow;


