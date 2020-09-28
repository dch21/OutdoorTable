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
        
        const [ totalReviews, overallRating, foodRating, serviceRating, ambienceRating, noiseLevel ] = this.props.aggregates;

        const noise = noiseLevel < 2 ? "Quiet" : noiseLevel >= 2 && noiseLevel <= 4  ? "Moderate" : "Loud";
        
        return (
            <div>
                <h3>What {totalReviews} people are saying </h3>
                <hr />
                <p>Overall Ratings and Reviews</p>
                <p>Reviews can only be written by those who have eaten at this restaurant using an OutdoorTable Booking.</p>
                <p>{overallRating} based on recent ratings</p>
                <div>
                    <div id="rating-columns">
                        <div className="individual-column">
                            <p>{foodRating}</p>
                            <p>Food</p>
                        </div>

                        <div className="individual-column">
                            <p>{serviceRating}</p>
                            <p>Service</p>
                        </div>

                        <div className="individual-column">
                            <p>{ambienceRating}</p>
                            <p>Ambience</p>
                        </div>

                        <div className="individual-column">
                            <p>{overallRating}</p>
                            <p>Value</p>
                        </div>

                        <div>
                            <i className="far fa-chart-bar"></i>
                            <p>Noise Level: {noise}</p>
                        </div>
                        
                        <BarChart ratings={this.props.aggregates.slice(6)}
                            total={this.props.aggregates.slice(6).length}
                        />
                    </div>
                </div>
                <hr />
            </div>
        )

    }

}

export default Aggregates;
