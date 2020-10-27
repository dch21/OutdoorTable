import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from 'react-router';

class PastReservationItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { boro, name, date, party_size, time, restaurantId} = this.props.pastRes;
        const logoPic = name.substring(0,2) + "4";

        return (
                <div className="user-item-container">

                    <div className="">
                        <Link to={`/restaurants/${restaurantId}`}><img className="user-food-pic" src={window[`${logoPic}`]} alt="food" /></Link>
                    </div>

                    <div className="user-rest-info">
                        <p>{name} - {boro}</p>
                        <p>{date} at {time}</p>
                        <p>Party Size: {party_size}</p>
                    </div>

                </div>
        )
    }

}


export default PastReservationItem;
