import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from 'react-router';

class FavoritesItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.userId,
            restaurantId: this.props.restaurant.restaurantId
        };
    }
    
    // componentDidMount(){
    // }

    render() {
        const { boro, name, cuisine, neighborhood, id} = this.props.restaurant;
        const logoPic = name.substring(0,2) + "4";

        return (
                <div className="user-item-container">

                    <div className="">
                        <Link to={`/restaurants/${id}`}><img className="user-food-pic" src={window[`${logoPic}`]} alt="food" /></Link>
                    </div>

                    <div className="user-rest-info">
                        <p>{name} - {boro}</p>
                        <p>{cuisine} - {neighborhood}</p>
                        <button onClick={()=>this.props.deleteFavorite(this.props.restaurant.favoriteId)}><p>Remove from Saved Restaurants</p></button>
                    </div>

                </div>
        )
    }

}


export default FavoritesItem;

// const mSTP = (state) => {
    
//     return {
//         pastThirty: parseInt(state.entities.reviews[0])
//         // reviews: Object.values(state.entities.reviews),
//         // results: state.entities.restaurants
//     };
// };

// // const mDTP = (dispatch) => {
// //     return {
// //         getReviews: (restaurantId) => dispatch(getReviews(restaurantId)),
// //     };
// // };

// export default connect(mSTP, null)(PastReservationItem);