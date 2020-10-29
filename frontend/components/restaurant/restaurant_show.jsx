import React from "react";
import RestaurantDetailSidebar from "./restaurant_detail_sidebar";
import CreateReservationContainer from "../reservations/create_reservation_container";
import RestaurantShowMap from "./restaurant_show_map";
// import ReviewsListContainer from "../reviews_list/reviews_list_container";
import ReviewsList from "../reviews_list/reviews_list";
import AggregatesContainer from "../ratings_aggregates/aggregates_container";
import RestaurantPhotos from "./restaurant_photos";
import {  Link } from "react-router-dom";



class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant_id: this.props.restaurantId,
            user_id: this.props.userId
        };
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

        const ratingAsFloat = parseFloat(this.props.aggregates[1]);

        const filledStars = ratingAsFloat ?  Array(Math.floor(ratingAsFloat)).fill("star") : [];
        const stars = filledStars.map(star => {
            return <span className="fa fa-star checked"></span>
        });

        const halfStars = ["half"].map(star => {
            return <span className="fa fa-star-half-full"></span>
        });

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
                
        const buttonToggle = this.props.favorite ? (
            <button className= "show-favorite-button" onClick={()=>this.props.deleteFavorite(this.props.favorite)}><i class="far fa-bookmark"><span>  Restaurant Saved</span></i></button>)
            :
            (<button className= "show-favorite-button" onClick={()=>this.props.createFavorite(this.state)}><i class="far fa-bookmark"><span>   Save Restaurant</span></i></button>)

        const favoriteButton = this.props.userId ? buttonToggle : null

        return (
            <div className="show-container">
                <div className="form-header">
                    <img className="logo-banner" src={window.border} alt="food" />
                    
                </div>

                
                <div className="parent-form"> 
                    

                    <div className="restaurant-info">

                        <div className="restaurant-nav">
                            <p>Overview</p> 
                            <p>Photos</p>
                            <p>Menu</p>
                            <p>Reviews</p>
                        </div>
                
                    

                        <h1>{this.props.restaurant.name}</h1>
                        <hr className="solid"></hr>
                        {stars}{halfStars}
                        {this.props.aggregates[1]}
                        <i className="far fa-comments"><span> {this.props.aggregates[0]} Reviews</span></i>
                        <i className="fas fa-money-bill-wave"></i><span>{this.props.restaurant.price_range}</span><i className="fas fa-cookie-bite"></i><span>{this.props.restaurant.cuisine}</span><span>{favoriteButton}</span> 
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
                            <a href={`${this.props.restaurant.website}`}>Restaurant Menu</a>
                        </div>
                        <br/>
                        <br/>

                        <div>
                            <AggregatesContainer restaurantId={this.props.restaurantId} />
                        </div>
                        <br/>

                        <div>
                            <h2>Reviews</h2>
                            <hr />
                            <ReviewsList getReviews={this.props.getReviews} 
                            restaurantId={this.props.restaurantId}
                            clearReviews={this.props.clearReviews} 
                            reviews={this.props.reviews}
                            reviewers={this.props.reviewers}/>
                        </div>
                        
                    </div>

                 

                    <div className="restaurant-sidebar">

                        <div className="reservation-form-container">
                            <CreateReservationContainer totalbookings={this.props.aggregates[11]}/>
                        </div>

                        {/* <div>
                            <RestaurantShowMap restaurant={this.props.restaurant}/>
                        </div> */}

                        <div>
                            <RestaurantDetailSidebar restaurant={this.props.restaurant}/>
                        </div>
                    </div>


                </div>

            </div>
        )
    }

}

export default RestaurantShow;


