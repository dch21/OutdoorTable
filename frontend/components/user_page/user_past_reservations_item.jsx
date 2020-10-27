import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from 'react-router';

class PastReservationItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount(){
        this.props.getThirtyDays({
            restaurant_id: this.props.pastRes.restaurantId,
            reivewer_id: this.props.userId
        });
    }

    render() {
        const { boro, name, date, party_size, time, restaurantId} = this.props.pastRes;
        const logoPic = name.substring(0,2) + "4";

        const reviewButton = (this.props.pastThirty !== 1) ? 
            (<button>Leave Review</button>) : null
        
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