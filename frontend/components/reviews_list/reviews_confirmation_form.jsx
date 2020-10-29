import React from "react";
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


class ReviewsConfirmationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review_body: "",
            private_note: "",
            overall_rating: "",
            food_rating: "",
            service_rating: "",
            ambience_rating: "", 
            noise_level: "",
            restaurant_id: this.props.reviewInfo.restaurantId,
            reviewer_id: this.props.userId
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state)
        .then( () => this.props.history.push(`/restaurants/${this.props.reviewInfo.restaurantId}`));
    }

    handleChange(e) {
        const { name, value } = e.target;

        this.setState({
        [name]: parseInt(value)
        });
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    // updateStar(field) {
    //     return e => this.setState({ [field]: e.currentTarget.value });
    // }

    renderErrors() {
        return (
        <ul className="errors-list">
            {this.props.errors.map( (error, idx) => (
                <li key={idx}>
                    {error}
                </li>
            ))}
        </ul>)
    }

    render() {

        // const one = (<div>
        //     <i class="fas fa-star" style={{color: "red"}} value={1}  onClick={this.updateStar("overall_rating")}></i>
        //     <i class="far fa-star" ></i>
        //     <i class="far fa-star"></i>
        //     <i class="far fa-star"></i>
        //     <i class="far fa-star"></i>
        // </div>)

        // const categories = ["overall_rating", "food_rating", "service_rating", "ambience_rating"];
        const radio = (category) => {
            return (
                <div>
                <h3>{category.split("_")[0].charAt(0).toUpperCase() + category.split("_")[0].slice(1)}</h3>
                <p>Poor</p>
                1
                <input
                className="review-radio"
                value={1}
                name={category}
                type="radio"
                onChange={this.handleChange}
                />
                2
                <input
                className="review-radio"
                value={2}
                name={category}
                type="radio"
                onChange={this.handleChange}
                />                                
                3
                <input
                className="review-radio"
                value={3}
                name={category}
                type="radio"
                onChange={this.handleChange}
                />
                4
                <input
                className="review-radio"
                value={4}
                name={category}
                type="radio"
                onChange={this.handleChange}
                    />
                5
                <input
                className="review-radio"
                value={5}
                name={category}
                type="radio"
                onChange={this.handleChange}
                />
                <p>Outstanding</p>
            </div>
            )
        }


        return (
            <div>
                <div className="review-info">
                    {this.renderErrors()}
                    <h3>Hi {this.props.userFirstName}, how was your experience at {this.props.reviewInfo.name} - {this.props.reviewInfo.boro}?</h3>
                    <p>Reservation made on {this.props.reviewInfo.date}.</p>
                </div>

                     <form onSubmit={this.handleSubmit}>

                            {radio("overall_rating")}
                            {radio("food_rating")}
                            {radio("service_rating")}
                            {radio("ambience_rating")}

                            <div>
                                <h3>Noise Level</h3>
                                <p>Quiet</p>
                                1
                                <input
                                className="review-radio"
                                value={1}
                                name="noise_level"
                                type="radio"
                                onChange={this.handleChange}
                                />
                                2
                                <input
                                className="review-radio"
                                value={2}
                                name="noise_level"
                                type="radio"
                                onChange={this.handleChange}
                                />                                
                                3
                                <input
                                className="review-radio"
                                value={3}
                                name="noise_level"
                                type="radio"
                                onChange={this.handleChange}
                                />
                                4
                                <input
                                className="review-radio"
                                value={4}
                                name="noise_level"
                                type="radio"
                                onChange={this.handleChange}
                                    />
                                <p>Energetic</p>
                            </div>

                            <textarea className="review-text-body"
                                value={this.state.review_body}
                                onChange={this.update("review_body")}
                                placeholder="Write your review here."
                            />

                            <textarea className="review-text-note"
                                value={this.state.private_note}
                                onChange={this.update("private_note")}
                                placeholder="Leave a private note for the restaurant here. (Optional)"
                            />

                        <button className="form-button" type="submit"><span>Submit Review</span></button>

                    </form>

            </div>
            
        )
    }

}

export default ReviewsConfirmationForm;