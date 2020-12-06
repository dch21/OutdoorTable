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
        const width = ratingAsFloat / 5.0;

        const stars = [0,1,2,3,4].map(star => {
            return <span className="fa fa-star checked"></span>
        });

        
        return ( 
            <div> 
                <h2>What {totalReviews} people are saying </h2>
                <hr />
                <div className="aggregates-container">

                    <div className="reviews">
                        <span>Overall Ratings and Reviews</span>
                        <p>Reviews can only be written by those who have eaten at this restaurant using an OutdoorTable Booking.</p>
                        <div>
                            <div className="splash-stars" style={{width: `${125 * width}px`}}>
                                {stars}
                            </div>
                            <div className="reviews-overall">
                                {overallRating} based on recent ratings
                            </div>
                        </div>

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
