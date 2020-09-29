import React from "react";
import BarChart from "./bar_chart";

class Aggregates extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getAggregates(this.props.restaurantId);
    }

    render() {
        
        if (this.props.aggregates.length === 0) {
            return null;
        }

        const [ totalReviews, overallRating, foodRating, serviceRating, ambienceRating, noiseLevel ] = this.props.aggregates;

        const noise = noiseLevel < 2 ? "Quiet" : noiseLevel >= 2 && noiseLevel <= 4  ? "Moderate" : "Loud";

        const ratingAsFloat = parseFloat(overallRating);
        

        const filledStars = Array(Math.floor(ratingAsFloat)).fill("star");
        const stars = filledStars.map(star => {
            return <span className="fa fa-star checked"></span>
        });

        const halfStars = ["half"].map(star => {
            return <span className="fa fa-star-half-full"></span>
        });

        const unfilledStars = Array(5 - (Math.floor(ratingAsFloat)) - 1).fill("no star");
        const noStars = unfilledStars.map(star => {
            return <span className="fa fa-star clear"></span>
        });

        
        return ( 
            <div> 
                <h2>What {totalReviews} people are saying </h2>
                <hr />
                <div className="aggregates-container">

                    <div className="reviews">
                        <span>Overall Ratings and Reviews</span>
                        <p>Reviews can only be written by those who have eaten at this restaurant using an OutdoorTable Booking.</p>
                        <p>{stars}{halfStars}{noStars}{overallRating} based on recent ratings</p>

                        <div className="rating-columns">
                            <div className="individual-column">
                                <p>{foodRating}</p>
                                Food
                            </div>
                            <hr />

                            <div className="individual-column">
                                <p>{serviceRating}</p>
                                Service
                            </div>
                            <hr />

                            <div className="individual-column">
                                <p>{ambienceRating}</p>
                                Ambience
                            </div>
                            <hr />

                            <div className="individual-column">
                                <p>{overallRating}</p>
                                Value
                            </div>
                        </div>

                    
                        <div className="noise">
                            <br/>
                            <span className="far fa-chart-bar"></span>
                            Noise Level: {noise}
                        </div>

                    </div>

                    <div className="bar-chart-container">
                        <br/>
                        <BarChart ratings={this.props.aggregates.slice(6)}
                            total={this.props.aggregates.slice(6).length}
                        />
                    </div>

                </div>
            </div>
        )

    }

}

export default Aggregates;
