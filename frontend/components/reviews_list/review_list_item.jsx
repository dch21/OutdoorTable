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


    return (<div>

    
        <ul>
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