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

    // componentWillUnmount() {
    //     this.props.clearReviews();
    // } 

    render() {

        // if (!this.props.restaurantId) {
        //     return null;
        // }

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
