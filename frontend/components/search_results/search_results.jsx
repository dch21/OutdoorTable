import React from "react";
import SearchResultsItem from "./search_results_item";
import SearchResultsFormContainer from "./search_results_form_container";
import SearchFormContainer from "../search_form/search_form_container";

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(e)  {
        if (e.target.checked) {
            this.props.addFilter(e.target.value);
        } else {
            this.props.deleteFilter(e.target.value);
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
        
        // for (let i = 0; i < filters.length; i++) {
        //     for (let j = 0; j < results.length; j++) {
        //         if (results[j].boro === filters[i] || results[j].cuisine === filters[i] || results[j].price_range === filters[i]) {
        //             filtered.push(results[j])
        //         }
        //     }
        // }
        for (let i = 0; i < results.length; i++) {
            debugger
            for (let j = 0; j < filters.length; j++) {
                debugger
                if (results[i].boro !== filters[j] && results[i].cuisine !== filters[j] && results[i].price_range !== filters[j]) {
                    debugger
                    break;
                }
                filtered.push(results[i])
                debugger
            }
        }
        
        const final = filtered.length == 0 ? results : filtered

        return (
            <div>
                <div>
                    {/* <div className="search-results-form">
                        <SearchResultsFormContainer />
                    </div> */}

                    {/* <div className="form-header">
                        <img className="logo-banner" src={window.border} alt="food" />

                    </div> */}

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
                            <div className="filter">
                                <i class="fas fa-dollar-sign"><span> Price</span></i>
                            </div>
                            <div>
                                <hr/>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e)} className="filter-input" type="checkbox" value="Under $10"/>
                                <p>$</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e)} className="filter-input" type="checkbox" value="$10-$25"/>
                                <p>$$</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e)} className="filter-input" type="checkbox" value="$25-50"/>
                                <p>$$$</p>
                            </div>
                            <br/>
                            <br/>


                            <div className="filter">
                                <i class="fas fa-map"><span> Location</span></i>
                            </div>
                            <div>
                                <hr/>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e)} className="filter-input" type="checkbox" value="Brooklyn"/>
                                <p>Brooklyn</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e)} className="filter-input" type="checkbox" value="Manhattan"/>
                                <p>Manhattan</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e)} className="filter-input" type="checkbox" value="Queens"/>
                                <p>Queens</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e)} className="filter-input" type="checkbox" value="Staten Island"/>
                                <p>Staten Island</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e)} className="filter-input" type="checkbox" value="Bronx"/>
                                <p>Bronx</p>
                            </div>
                            <br/>
                            <br/>

                            <div className="filter">
                                <i class="fas fa-utensils"><span> Cuisine</span></i>
                            </div>
                            <div>
                                <hr/>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e)} className="filter-input" type="checkbox" value="BBQ"/>
                                <p>BBQ</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e)} className="filter-input" type="checkbox" value="Chinese"/>
                                <p>Chinese</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e)} className="filter-input" type="checkbox" value="Thai"/>
                                <p>Thai</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e)} className="filter-input" type="checkbox" value="Mexican"/>
                                <p>Mexican</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e)} className="filter-input" type="checkbox" value="Cuban"/>
                                <p>Cuban</p>
                            </div>
                            <div className="filter">
                                <input onClick={ (e) => this.handleClick(e)} className="filter-input" type="checkbox" value="Italian"/>
                                <p>Italian</p>
                            </div>
                        </div>

                       
                        
                        <div className="search-results">
                        <h2>You searched for {results[0].searchTerm === "" ? `${'Everything'}` : `"${results[0].searchTerm}"`} in New York City</h2>
                            {
                                final.map(result => (
                                    <SearchResultsItem result={result}
                                        key={result.id}
                                        getHours={this.props.getHours}
                                        // hours={this.props.hours}
                                        // review={this.props.reviews[0]}
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
