import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from "react-redux";
// import { withRouter } from 'react-router';


class SplashCarouselItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        if (!this.props.result) {
            return null;
        }
        
        const ratingAsFloat = parseFloat(this.props.result.rating);

        const filledStars = ratingAsFloat ?  Array(Math.floor(ratingAsFloat)).fill("star") : [];
        const stars = filledStars.map(star => {
            return <span className="fa fa-star checked"></span>
        });

        const halfStars = ["half"].map(star => {
            return <span className="fa fa-star-half-full"></span>
        });

        const logoPic = this.props.result.name.substring(0,2) + "4";
        
        const dollar_sign = this.props.result.price_range === "Under $10" ? "$" : (this.props.result.price_range === "$10-$25" ? "$$" : "$$$");

        return (
                <div className="results-item">
                
                    <div>
                        <Link to={`/restaurants/${this.props.result.id}`}><img className="splash-carousel-food-pic" src={window[`${logoPic}`]} alt="food" /></Link>
                        <div className="splash-carousel-info">
                            <Link to={`/restaurants/${this.props.result.id}`}><p>{this.props.result.name}</p></Link>
                            <p>
                                <span>{dollar_sign}</span> &middot; <span>{this.props.result.cuisine}</span> &middot; <span>{this.props.result.neighborhood}</span> 
                            </p>
                            <div className="map-stars">
                                {stars}{halfStars} &middot; {`${this.props.result.number_reviews} Reviews`}
                            </div>
                        </div>
                    </div>

                </div>
        )
    }

}

export default SplashCarouselItem;


