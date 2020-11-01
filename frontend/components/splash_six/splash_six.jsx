import React from "react";
import { withRouter } from 'react-router';


class SplashSix extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toISOString().slice(0, 10),
            time: "7:00PM",
            party_size: 2,
            searchTerm: "Brooklyn",
        },
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeSearch = this.changeSearch.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.searchRestaurant(this.state);

        this.props.history.push('/search');
    }
    
    //must be passed in as function below so it doesn't infinitely propagate
    changeSearch(place) {
        this.setState({ searchTerm: place});
    }

    render() {

        return (
            <div>
            <div className="splash-six"> 
                <div className="splash-feature-area">
                    <h2>Featured Areas</h2>
                    <hr />
                </div>

                <div className="splash-row"> 
                    

                    <div className="splash-panel-container" onMouseEnter={()=>this.changeSearch("")}>
                        <button onClick={this.handleSubmit}>All Five Boroughs</button>
                        <img className="splash-pic" src={window.nyc} alt="nyc" />
                    </div>
                    
                    <div className="splash-panel-container" onMouseEnter={() => this.changeSearch("Brooklyn")}>
                        <button onClick={this.handleSubmit}>Brooklyn</button>
                        <img className="splash-pic" src={window.brooklyn} alt="brooklyn" />
                    </div>

                    <div className="splash-panel-container" onMouseEnter={() => this.changeSearch("Manhattan")}>
                        <button onClick={this.handleSubmit}>Manhattan</button>
                        <img className="splash-pic" src={window.manhattan} alt="manhattan" />
                    </div>


                    <div className="splash-panel-container" onMouseEnter={() => this.changeSearch("Queens")}>
                        <button onClick={this.handleSubmit}>Queens</button>
                        <img className="splash-pic" src={window.queens} alt="queens" />
                    </div>

                    <div className="splash-panel-container" onMouseEnter={() => this.changeSearch("Bronx")}>
                        <button onClick={this.handleSubmit}>Bronx</button>
                        <img className="splash-pic" src={window.bronx} alt="bronx" />
                    </div>

                    <div className="splash-panel-container" onMouseEnter={() => this.changeSearch("Staten")}>
                        <button onClick={this.handleSubmit}>Staten Island</button>
                        <img className="splash-pic" src={window.statenisland} alt="statenisland" />
                    </div>

                </div>

                 
            </div>
            </div>
        )

    }

}

export default withRouter(SplashSix);
