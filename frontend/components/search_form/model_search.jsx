import React from "react";
import { withRouter } from 'react-router';


class ModelSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.searchBar;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.updateParty = this.updateParty.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        
        this.props.searchRestaurant(this.state).then( this.props.closeModal );
        
        this.props.history.push('/search');
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    clear(field) {
        return e => this.setState({ [field]: "" });
    }

    updateDate(e) {
        this.setState({ "date": e.currentTarget.value });
    }

    updateTime(e) {
        this.setState({ "time": e.currentTarget.value });
    }

    updateParty(e) {
        this.setState({ "party_size": parseInt(e.currentTarget.value) });
    }


    render() {

       return (
            <div className="modal-search-container"> 
                <div className="modal-search-header">
                    <h2>Find your Table for Outdoor Dining</h2>
                </div>
                <form onSubmit={this.handleSubmit }>

                            <select value={this.state.time} onChange={this.updateTime}>
                                {
                                    [9, 10, 11].map(number => (
                                        <>
                                            <option value={`${number}:00AM`} >{`${number}:00`} AM</option>
                                            <option value={`${number}:30AM`} >{`${number}:30`} AM</option>
                                        </>
                                    ))
                                }
                                {
                                    [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
                                        <>
                                            <option value={`${number}:00PM`}>{`${number}:00`} PM</option>
                                            <option value={`${number}:30PM`}>{`${number}:30`} PM</option>
                                        </>
                                    ))
                                }
                            </select>
                        
                            <input className="modal-search-date" type="date" value={this.state.date}
                                min={new Date().toISOString().slice(0, 10)}
                                max="2020-12-31"
                                onChange={this.updateDate}
                            />

                            <select className="modal-party-size" value={this.state.party_size} onChange={this.updateParty}>
                                <option value="1">1 Person</option>
                                {
                                    [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(number => (
                                        <option value={number}>{number} People</option>
                                    ))
                                }
                                <option value="21">Large Party</option>
                            </select>
                           
                            <input type="text"
                                value={this.state.searchTerm}
                                onClick={this.clear("searchTerm")}
                                onChange={this.update("searchTerm")}
                                placeholder="Location, Restaurant, or Cuisine"
                            />
                            <button className="modal-form-button" type="submit">Let's go</button>
                        
                    
                </form>
            </div>
        )
    }

}

export default withRouter(ModelSearch);

// .then(this.props.closeModal)