// import React from 'react';
// import { Link } from 'react-router-dom';

// class SearchResultsItem extends React.Component {
//     constructor(props) {
//         super(props);
//     }
    
//     componentDidMount () {
//       this.props.getReviews(this.props.result.id);
//     }
    
//     render () {

//         if (!this.props.review) {
//             return null;
//         }

//         const logoPic = this.props.result.name.substring(0, 4) + "4";

//         return (
//             <div className="search-results">
//                 <img className="food-pic" src={window[`${logoPic}`]} alt="food" />
//                 <div>
//                     <Link to={`/restaurants/${this.props.result.id}`}>{this.props.result.name}</Link>
//                     <br/>
//                     <i className="fas fa-money-bill-wave"></i><span>{this.props.result.price_range}</span><i className="fas fa-cookie-bite"></i><span>{this.props.result.cuisine}</span>
//                     <h3>{this.props.review["review_body"]}</h3>
//                 </div>
//             </div>
//         )
//     }

// }
// export default SearchResultsItem;