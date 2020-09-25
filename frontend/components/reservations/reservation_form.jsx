import React from "react";

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.reservation;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateParty = this.updateParty.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.updateDate = this.updateDate.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    updateParty(e) {
        this.setState({ "party_size" : parseInt(e.currentTarget.value) });
    }

    updateTime(e) {
        this.setState({ "time" : parseInt(e.currentTarget.value) });
    }
    updateDate(e) {
        this.setState({ "date" : e.currentTarget.value });
    }

    render() {
        
        return (
            
            <div>
                
                {/* <h1>{this.props.formType}</h1> */}
                <form onSubmit={this.handleSubmit}>

                    <input type="date" value={this.state.date} 
                    min={new Date().toISOString().slice(0, 10)}
                    max="2020-12-31"
                    onChange={this.updateDate}
                    />

                    <select value={this.state.party_size} onChange={this.updateParty}>
                        <option value="1">1 Person</option>
                    {
                        [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(number => (
                            <option value={number}>{number} People</option>
                        ))
                    }
                        <option value="21">Large Party</option>
                    </select>


                    <select value={this.state.time} onChange={this.updateTime}>
                        {
                            [9, 10, 11].map(number => (
                                <>
                                <option value={`${number}:00AM`}>{`${number}:00`} AM</option>
                                <option value={`${number}:30AM`}>{`${number}:30`} AM</option>
                                </>
                            ))
                        }
                        {
                            [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(number => (
                                <>
                                <option value={`${number}:00PM`}>{`${number}:00`} PM</option>
                                <option value={`${number}:30PM`}>{`${number}:30`} PM</option>
                                </>
                            ))
                        }
                    </select>

                    <button type="submit">{this.props.formType}</button>
                </form>
            </div>
        )
    }

}
export default ReservationForm;


