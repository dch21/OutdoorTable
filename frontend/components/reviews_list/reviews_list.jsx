import React from "react";
import ReviewListItem from "./review_list_item";

class ReviewsList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getReviews(this.props.restaurantId);
    }

    render() {
        const { reviews } = this.props;

        return (
            <div>
                    
                    {
                        reviews.map(review => (
                            <ReviewListItem review={review}
                            reviewers={this.props.reviewers}
                                // key={reviews.id}
                            />
                        ))
                    }
                
            </div>
        )

    }

}

export default ReviewsList;
