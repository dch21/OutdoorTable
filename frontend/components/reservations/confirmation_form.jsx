import React from "react";
import { connect } from "react-redux";
import { createReservation } from "../../actions/reservations_actions";


class ComfirmationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant_id: this.props.res_detail.party_size.id,
            time: this.props.res_detail.time,
            date: this.props.res_detail.date,
            party_size: this.props.res_detail.party_size,
            user_id: this.props.user_id,
            notes: ""
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReservation(this.state);
    }

    convertTime(time){
       if (time[time.length - 3 ] === 5) {

       }
    }
   

    render() {
        
        return (
            
            <div> 
                {this.props.res_detail.name}
                {this.props.res_detail.party_size}

                {this.props.res_detail.date}
    
            </div>
        )
    }

}
// date: "2020-10-23"
// name: "Hometown Bar-B-Que"
// party_size: "2"
// restaurant_id: 1
// time: "7.5PM"
// export default ComfirmationForm;

const mSTP = (state) => {
    return {
        res_detail: state.entities.reservations,
        user_id: state.session.id
    }

   
};

const mDTP = (dispatch) => {
    return {
        createReservation: (reservation) => dispatch(createReservation(reservation)),
    };
};

export default connect(mSTP, mDTP)(ComfirmationForm);


