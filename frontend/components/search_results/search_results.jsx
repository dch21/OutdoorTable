import React from "react";
import SearchResultsItem from "./search_results_item";
import { Link } from 'react-router-dom';

import SearchFormContainer from "../search_form/search_form_container";


class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(e, filter)  {
        if (e.target.checked) {
            this.props.addFilter({[filter]: e.target.value});
        } else {
            this.props.deleteFilter({[filter]: e.target.value});
        }
    }

    componentWillUnmount() {
        this.props.resetFilter();
    }

    render() {

        const { results } = this.props;
        const { filters } = this.props;

        if (!Array.isArray(results)) {
            return null;
        }

        if (results.length === 0) {
            return (
                <div>
                  <div className="splash-banner"> 
                        <div className="splash-banner-container">
                            <img className="logo-banner" src={window.border} alt="food" />
                            <div>
                                <SearchFormContainer/>
                            </div>
                        </div>
                </div>
                <p>No results found. Try again.</p>
                </div> 
            )
        }
        
        let filtered = []
        
        for (let i = 0; i < results.length; i++) {
            if (filters.boro.length !== 0 && !(filters.boro.includes(results[i].boro))) {
                continue;
            }
            if (filters.price.length !== 0 && !(filters.price.includes(results[i].price_range))) {
                continue;
            }
            if (filters.cuisine.length !== 0 && !(filters.cuisine.includes(results[i].cuisine))) {
                continue;
            }
            filtered.push(results[i])
        }
        
        let final1 = (filters.price.length > 0 || filters.boro.length > 0 || filters.cuisine.length > 0) ? filtered : results
        
        return (
            <div>
                <div>
               

                    <div className="splash-banner"> 
                        <div className="splash-banner-container">
                            <img className="logo-banner" src={window.border} alt="food" />
                            <div>
                                <SearchFormContainer/>
                            </div>
                        </div>
                    </div> 

                    <div className="search-results-container">
                        <div className="filter-locations">
                            <div>
                                <Link to={"/searchmap"}><img className="map-list-button" src={window.map} /></Link>                            
                            </div>
                            <div className="filter">
                                <i className="fas fa-dollar-sign"><span> Price</span></i>
                            </div>
                            <div>
                                <hr/>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "price")} className="filter-input" type="checkbox" value="Under $10"/>
                                <p>$</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "price")} className="filter-input" type="checkbox" value="$10-$25"/>
                                <p>$$</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "price")} className="filter-input" type="checkbox" value="$25-50"/>
                                <p>$$$</p>
                            </div>
                            <br/>
                            <br/>


                            <div className="filter-room">
                                <i className="fas fa-map"><span> Location</span></i>
                            </div>
                            <div>
                                <hr/>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "boro")} className="filter-input" type="checkbox" value="Brooklyn"/>
                                <p>Brooklyn</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "boro")} className="filter-input" type="checkbox" value="Manhattan"/>
                                <p>Manhattan</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "boro")} className="filter-input" type="checkbox" value="Queens"/>
                                <p>Queens</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "boro")} className="filter-input" type="checkbox" value="Bronx"/>
                                <p>Bronx</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "boro")} className="filter-input" type="checkbox" value="Staten Island"/>
                                <p>Staten Island</p>
                            </div>
                            <br/>
                            <br/>

                            <div className="filter-room">
                                <i className="fas fa-utensils"><span> Cuisine</span></i>
                            </div>
                            <div>
                                <hr/>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "cuisine")} className="filter-input" type="checkbox" value="BBQ"/>
                                <p>BBQ</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "cuisine")} className="filter-input" type="checkbox" value="American"/>
                                <p>American</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "cuisine")} className="filter-input" type="checkbox" value="Chinese"/>
                                <p>Chinese</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "cuisine")} className="filter-input" type="checkbox" value="Thai"/>
                                <p>Thai</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "cuisine")} className="filter-input" type="checkbox" value="Mexican"/>
                                <p>Mexican</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "cuisine")} className="filter-input" type="checkbox" value="Cuban"/>
                                <p>Cuban</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "cuisine")} className="filter-input" type="checkbox" value="Italian"/>
                                <p>Italian</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "cuisine")} className="filter-input" type="checkbox" value="Japanese"/>
                                <p>Japanese</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "cuisine")} className="filter-input" type="checkbox" value="Columbian"/>
                                <p>Columbian</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "cuisine")} className="filter-input" type="checkbox" value="Vietnamese"/>
                                <p>Vietnamese</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "cuisine")} className="filter-input" type="checkbox" value="Greek"/>
                                <p>Greek</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "cuisine")} className="filter-input" type="checkbox" value="Caribbean"/>
                                <p>Caribbean</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "cuisine")} className="filter-input" type="checkbox" value="Yemeni"/>
                                <p>Yemeni</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e, "cuisine")} className="filter-input" type="checkbox" value="Cajun"/>
                                <p>Cajun</p>
                            </div>
                        </div>

                       
                        
                        <div className="search-results">
                            <h2>You searched for {results[0].searchTerm === "" ? `${'Everything'}` : `"${results[0].searchTerm}"`} in New York City</h2>
                            {   final1.length === 0 ? <h4>No results, try expanding your filters.</h4>
                             :
                                final1.map(result => (
                                    <SearchResultsItem result={result}
                                        //
                                        reservationParams={this.props.reservationParams}
                                        //
                                        key={result.id}
                                        getHours={this.props.getHours}
                                        openModal={this.props.openModal}
                                        currentUser={this.props.currentUser}
                                        pendingReservation={this.props.pendingReservation}
                                    />
                                ))
                            }
                        </div>

                       
                    </div>          

                </div>
            </div>
        )

    }
}

export default SearchResults;
