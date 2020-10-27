import React from "react";
import { Link } from 'react-router-dom';

class ReviewsConfirmationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    // componentDidMount() {
    // }


    render() {
        return (
            <div>
               <h3>{this.props.userFirstName}, how was your experience at {this.props.reviewInfo.name} - {this.props.reviewInfo.boro}?</h3>
               <p>Reservation made on {this.props.reviewInfo.date}.</p>
            </div>
            
        )
    }

}

export default ReviewsConfirmationForm;