import React from 'react';

const ReviewListItem = props => {
    
    const filledStars = Array(props.review.overall_rating).fill("star");

    const stars = filledStars.map(star => {
        return <i className="fa fa-star checked"></i>
    });

    const unfilledStars = Array(5 - props.review.overall_rating).fill("no star");

    const noStars = unfilledStars.map(star => {
        return <i className="fa fa-star clear"></i>
    });

    const reviewer = props.reviewers[props.review.reviewer_id]
    
    let reviewerFirstName = reviewer.first_name[0].toUpperCase() + reviewer.first_name.slice(1)

    const colors = ['rgb(203, 139, 80)', 'rgb(111, 111, 217)', 'rgb(199, 109, 219)', 'rgb(110, 208, 172)'];
    const random_color = colors[Math.floor(Math.random() * colors.length)];
    const dateDined = Math.ceil( (new Date() - new Date(props.review.created_at)) / (1000 * 60 * 60 * 24) )

    return (<div className="reviews-container">

                <div className="review-container">

                    <div className="circle-container">
                    <div className="circles" style={{ background: random_color }}>
                            <p>{reviewer.first_name[0].toUpperCase() + reviewer.last_name[0].toUpperCase()}</p>
                    </div>

                        <div className="reviewer-name">
                            {reviewerFirstName + reviewer.last_name[0].toUpperCase()}
                            <p>{reviewer.location}</p>
                        </div>
                    </div>

                    <div className="review-body"> 
                        {stars}{noStars} &middot; Dined {dateDined} {dateDined === 1 ? "day" : "days"} ago.
                        <ul>
                            <li>Overall <span>{props.review.overall_rating}</span></li>
                            <li key="food"> &middot; Food <span>{props.review.food_rating}</span> </li>
                            <li key="service">&middot; Service <span>{props.review.service_rating}</span> </li>
                            <li key="ambience">&middot; Ambience <span>{props.review.ambience_rating}</span> </li>
                        </ul>
                        {props.review.review_body}
                    </div>

                </div>

                <hr/>

        </div>
    )
}
export default ReviewListItem;