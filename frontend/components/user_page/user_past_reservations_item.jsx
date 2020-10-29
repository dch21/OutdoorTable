import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from 'react-router';

class PastReservationItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.pastRes.name,
            date: this.props.pastRes.date,
            boro: this.props.pastRes.boro,
            restaurantId: this.props.pastRes.restaurantId
        };
    }
    
    componentDidMount(){
        this.props.getThirtyDays({
            restaurant_id: this.props.pastRes.restaurantId,
            reviewer_id: this.props.userId
        });
    }

    render() {
        const { boro, name, date, party_size, time, restaurantId} = this.props.pastRes;
        const logoPic = name.substring(0,2) + "4";

        const reviewButton = (this.props.pastThirty !== 1) ? 
            (<Link className="user-leave-review-link" to={"/reviews/create"} onClick={() => this.props.pendingReview(this.state)}><p className="user-leave-review">Leave Review</p></Link>) : null
        
        

        return (
                <div className="user-item-container">

                    <div className="">
                        <Link to={`/restaurants/${restaurantId}`}><img className="user-food-pic" src={window[`${logoPic}`]} alt="food" /></Link>
                    </div>

                    <div className="user-rest-info">
                        <p>{name} - {boro}</p>
                        <p>{date} at {time}</p>
                        <p>Party Size: {party_size}</p>
                        {reviewButton}
                    </div>

                </div>
        )
    }

}


// export default PastReservationItem;

const mSTP = (state) => {
    
    return {
        pastThirty: parseInt(state.entities.reviews[0])
        // reviews: Object.values(state.entities.reviews),
        // results: state.entities.restaurants
    };
};

// const mDTP = (dispatch) => {
//     return {
//         getReviews: (restaurantId) => dispatch(getReviews(restaurantId)),
//     };
// };

export default connect(mSTP, null)(PastReservationItem);