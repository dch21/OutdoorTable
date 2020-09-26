import React from 'react';

const ReviewListItem = props => {
    
    return (<li>
        {props.review.review_body}
        {/* {props.review.user}  */}
    </li>
    )
}
export default ReviewListItem;