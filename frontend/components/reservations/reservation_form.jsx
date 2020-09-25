import React from "react";

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.reservation;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    update(e) {
        debugger
        this.setState({ "party_size" : parseInt(e.currentTarget.value) });
    }

    render() {
        
        return (
            
            <div>
                
                {/* <h1>{this.props.formType}</h1> */}
                <form onSubmit={this.handleSubmit}>

                   <input type="date"/>

                    <select value={this.state.party_size} onChange={this.update}>
                        <option value="1">1 Person</option>
                    {
                        [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(number => (
                            <option value={number}>{number} People</option>
                        ))

                    }
                        <option value="21">Large Party</option>
                    </select>



                    {/* <button type="submit">{this.props.formType}</button> */}
                </form>
            </div>
        )
    }

}
export default ReservationForm;


