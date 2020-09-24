import React from "react";
import SearchResultsItem from "./search_results_item";

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     searchTerm: "Location, Restaurant, or Cuisine"
        // };
    }


    render() {

        const { results } = this.props;

        if (!Array.isArray(results)) {
            return null;
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