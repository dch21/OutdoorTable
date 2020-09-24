import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultsItem = props => {
    
    return (<li>
        <Link to={`/restaurants/${props.result.id}`}>{props.result.name}</Link>
    </li>
    )
}
export default SearchResultsItem;