import React from 'react';

const ReviewListItem = props => {
    
    const filledStars = Array(props.review.overall_rating).fill("star");

    const stars = filledStars.map(star => {
        return <span className="fa fa-star checked"></span>
    });

    const unfilledStars = Array(5 - props.review.overall_rating).fill("no star");

    const noStars = unfilledStars.map(star => {
        return <span className="fa fa-star clear"></span>
    });

    const reviewer = props.reviewers[props.review.reviewer_id]
    
    let reviewerFirstName = reviewer.first_name[0].toUpperCase() + reviewer.first_name.slice(1)

    return (<div>

        <div className="circles">
            <p>{reviewer.first_name[0].toUpperCase() + reviewer.last_name[0].toUpperCase()}</p>
        </div>
    
        <ul>
            <div className="reviewer-name">
                {reviewerFirstName + reviewer.last_name[0].toUpperCase()}
                <br/>
                {reviewer.location}
            </div>
            {stars}{noStars}
            Overall {props.review.overall_rating}
            <li key="food"> Food: {props.review.food_rating} </li>
            <li key="service"> Service {props.review.service_rating} </li>
            <li key="ambience"> Ambience {props.review.ambience_rating} </li>
        </ul>
        {props.review.review_body}
    </div>
    )
}
export default ReviewListItem;