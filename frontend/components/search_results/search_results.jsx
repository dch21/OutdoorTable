import React from "react";
import SearchResultsItem from "./search_results_item";
import SearchResultsFormContainer from "./search_results_form_container";
import SearchFormContainer from "../search_form/search_form_container";


class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e)  {
        if (e.target.checked) {
            this.props.addFilter(e.target.value);
        } else {
            this.props.deleteFilter(e.target.value);
        }
    }

    render() {


        const { results } = this.props;
        const { filters } = this.props;

        if (!Array.isArray(results)) {
            return null;
        }

        if (results.length === 0) {
            return (
                <p>No results found. Try again.</p>
            )
        }
        
        let filtered = []

        
        for (let i = 0; i < filters.length; i++) {
            for (let j = 0; j < results.length; j++) {
                if (results[j].boro === filters[i] || results[j].cuisine === filters[i] || results[j].price_range === filters[i]) {
                    filtered.push(results[j])
                }
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
                        <div className="filter">
                            <input onClick={ (e) => this.handleClick(e)} className="filter-input" type="checkbox" value="Brooklyn"/>Brooklyn
                        </div>
                        
                        <div className="search-results">
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
