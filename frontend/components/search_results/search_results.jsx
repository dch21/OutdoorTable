import React from "react";
import SearchResultsItem from "./search_results_item";

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

        return (
            <div>
                <ul>
                    {
                        results.map(result => (
                            <SearchResultsItem result={result}
                                key={result.id}
                            />
                        ))
                    }
                </ul>
            </div>
        )

    }

}

export default SearchResults;
