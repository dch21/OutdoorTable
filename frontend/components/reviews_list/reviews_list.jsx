import React from "react";
import ReviewListItem from "./review_list_item";

class ReviewsList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.clearReviews();
        this.props.getReviews(this.props.restaurantId);
    }

    componentDidUpdate(prevProps) {
        
        if (this.props.restaurantId !== prevProps.restaurantId) {
            this.props.clearReviews();
            this.props.getReviews(this.props.restaurantId);
        }
    }



    render() {


        const { reviews } = this.props;
        
        
        
        return (
            <div>
                    
                    {
                        reviews.reverse().map(review => (
                            <ReviewListItem review={review}
                            reviewers={this.props.reviewers}
                            />
                        ))
                    }
                
            </div>
        )

    }

}

export default ReviewsList;
