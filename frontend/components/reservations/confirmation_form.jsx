import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { createReservation, clearErrors } from "../../actions/reservations_actions";
import { withRouter } from 'react-router';
import { openModal } from "../../actions/modal_actions";



class ComfirmationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant_id: this.props.res_detail.restaurant_id,
            time: this.props.res_detail.time,
            date: this.props.res_detail.date,
            party_size: this.props.res_detail.party_size,
            user_id: this.props.user_id,
            notes: "",
            phone_number: "",
            email: "",
            occasion: "",
            //
            errorPhone: "",
            errorEmail: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.props.user_id) {
            this.props.openModal("signIn");
            return;
        }
        if (this.checkPhone(this.state.phone_number)) {
            this.setState({errorPhone: "Phone number must be in XXX-XXX-XXXX format."});
            return;
        }
        if (this.checkEmail(this.state.email)) {
            this.setState({errorEmail: "Valid email needs to have '@'."});
            return;
        }
        this.props.createReservation(this.state).then( () =>
        this.props.history.push(`/users/${this.props.user_id}`)
        );
    }

    //
    checkPhone(string) {
        let parts = string.split("-");
        if (parts.length !== 3) return true;
        if (parts[0].length !== 3 || !(/^\d+$/.test(parts[0])) ) return true;
        if (parts[1].length !== 3 || !(/^\d+$/.test(parts[1])) ) return true;
        if (parts[2].length !== 4 || !(/^\d+$/.test(parts[2])) ) return true;
        return false;
    }

    checkEmail(string) {
        let parts = string.split("@");
        if (parts.length !== 2) return true;
        return false;
    }
    //

    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
        
    }

    clear(field) {
        return e => this.setState({ [field]: "" });
    }

    renderErrors() {
        return (
            <ul className="errors-list">
                {this.props.errors.map( (error, idx) => (
                    <li key={idx}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    renderPhoneErrors() {
        if (this.state.errorPhone === "") return;
        return (
            <ul className="errors-list">
                <li>{this.state.errorPhone}</li>
            </ul>
        )
    }

    renderEmailErrors() {
        if (this.state.errorEmail === "") return;
        return (
            <ul className="errors-list">
                <li>{this.state.errorEmail}</li>
            </ul>
        )
    }
   
    render() {
        const logoPic = this.props.res_detail.name.substring(0,2) + "4";

        return (
            <div className="confirm-form-main-container">
            
                <div className="confirm-form"> 
                    <p>{"You're almost done!"}</p>
                    {this.renderErrors()}
                    {this.renderPhoneErrors()}
                    {this.renderEmailErrors()}
                  
                    <div className="confirm-form-top-container">
                        <div className="confirm-rest-info-container">
                            <Link to={`/restaurants/${this.props.res_detail.restaurant_id}`}><img className="confirm-food-pic" src={window[`${logoPic}`]} alt="food" /></Link>
                            <div className="confirm-rest-info">
                                <h3>{this.props.res_detail.name}</h3>
                                <div className="confirm-rest-info-line">
                                    <div>
                                        <i className="far fa-calendar"><span> {this.props.res_detail.date}</span></i>
                                    </div>
                                    <div>
                                        <i className="far fa-clock"><span> {this.props.res_detail.time}</span></i>
                                    </div>
                                    <div>
                                        <i className="far fa-user"><span> Party of {this.props.res_detail.party_size}</span></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    

                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input type="text" className="confirm-input-box "
                                value={this.state.phone_number}
                                onClick={this.clear("phone_number")}
                                onChange={this.update("phone_number")}
                                placeholder="Phone Number"
                            />
                            
                            <input type="text" className="confirm-input-box "
                                value={this.state.email}
                                onClick={this.clear("email")}
                                onChange={this.update("email")}
                                placeholder="Email"
                            />
                        </div>

                        <div>
                            <input type="text" className="confirm-input-box "
                                value={this.state.occasion}
                                onClick={this.clear("occasion")}
                                onChange={this.update("occasion")}
                                placeholder="Occasion (optional)"
                            />

                            <input type="text" className="confirm-input-box "
                                value={this.state.notes}
                                onClick={this.clear("notes")}
                                onChange={this.update("notes")}
                                placeholder="Special Request (optional)"
                            />
                        </div>

                        <button className="form-button" type="submit"><span>Complete Reservation</span></button>

                    </form>
                </div>

                <div className="confirm-disclaimers">
                    <div>
                        <h4>What to Know Before You Go</h4>
                        <p>We have a 15 minute grace period. Please call us if you are running 15 minutes later than your reservation time.</p>
                        <p>Your table will be reserved for two hours.</p>
                    </div>

                    <div>
                        <h4>A Note from this Restaurant</h4>
                        <p>Please wear a mask upon arrival. All guest will be screened for temperature before they are seated.</p>
                    </div>
                </div>

            </div>
        )
    }

}


const mSTP = (state) => {
    return {
        res_detail: state.entities.reservations,
        user_id: state.session.id,
        errors: state.errors.reservation,
    }

   
};

const mDTP = (dispatch) => {
    return {
        createReservation: (reservation) => dispatch(createReservation(reservation)),
        openModal: modal => dispatch(openModal(modal)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mSTP, mDTP)(ComfirmationForm);


