import React from "react";
import SearchResultsItem from "./search_results_item";
import SearchResultsFormContainer from "./search_results_form_container";

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { results } = this.props;

        if (!Array.isArray(results)) {
            return null;
        }

        if (results.length === 0) {
            return (
                <p>No results found. Try again.</p>
            )
        }
        debugger
        return (
            <div>

                <div className="search-results-container">
                    <div className="search-results-form">
                        <SearchResultsFormContainer />
                    </div>
                    
                    <div className="search-results">
                        {
                            results.map(result => (
                                <SearchResultsItem result={result}
                                    key={result.id}
                                    // review={this.props.reviews[0]}
                                    // getReviews={this.props.getReviews}
                                />
                            ))
                        }
                    </div>
                </div>
                   
            </div>
        )

    }
}

export default SearchResults;
