import React from 'react';

import { connect } from "react-redux";
import { pendingReservation } from "../../actions/reservations_actions";
import { openModal } from "../../actions/modal_actions";
import { addFilter, deleteFilter, resetFilter } from "../../actions/filter_actions";
import { Link } from 'react-router-dom';


import SearchMapItem from "./search_map_item";
import SearchFormContainer from "../search_form/search_form_container";



let map;

class SearchMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {markers: []}
    }

    componentDidMount() {
        const mapCenter = { lat: 40.708081, lng: -73.933709 };
    
        map = new google.maps.Map(
            document.getElementById('search-map'), { zoom: 10, center: mapCenter });

        this.props.results.forEach( (restaurant) => this.createMarker(restaurant, map));
    }



    createMarker(restaurant, map) {
        const position = new google.maps.LatLng(restaurant.lat, restaurant.lng);
        const marker = new google.maps.Marker({
            position,
            map: map,
            name: restaurant.name,
            restaurantId: restaurant.id
        });
        marker.addListener('click', () => this.openInfo(map, marker));
        this.state.markers.push(marker);
    }

    openInfo(map, marker) {
        const window = new google.maps.InfoWindow({
            content: marker.name
        });
        window.open(map, marker);
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
        
        const final = (filters.price.length > 0 || filters.boro.length > 0 || filters.cuisine.length > 0) ? filtered : results

        let finalNames = []
        final.forEach( (rest) => { 
            finalNames.push(rest.name)
        })

        this.state.markers.forEach( (marker) => {
            if (!(finalNames.includes(marker.name))) {
                marker.setMap(null)} else if (finalNames.includes(marker.name) && marker.map === null) {
                    marker.setMap(map)
                }
 
        })


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

                    <div className="map-search-results-container">
                        <div className="map-filter-locations">
                            <div>
                                <button className="list-button"><Link to={"/search"}><i className="fas fa-list"> List</i></Link></button>                                                         
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
                            <br className="filter-break"/>


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

                       
                        
                        <div className="search-map-results">
                            <h3>You searched for {results[0].searchTerm === "" ? `${'Everything'}` : `"${results[0].searchTerm}"`} in New York City</h3>
                            {   final.length === 0 ? <h4>No results, try expanding your filters.</h4>
                             :
                                final.map(result => (
                                    <SearchMapItem result={result}
                                        key={result.id}
                                        getHours={this.props.getHours}
                                        openModal={this.props.openModal}
                                        currentUser={this.props.currentUser}
                                        pendingReservation={this.props.pendingReservation}
                                    />
                                ))
                            }
                        </div>

                       <div id="search-map" ref="map">
                            Map
                        </div>
                    </div>          

                </div>
            </div>
            
        );
  }
  

}



const mSTP = (state) => {
    return {
        results: Object.values(state.entities.searchResults),
        currentUser: state.session.id,
        filters: state.ui.filters
    };
};

const mDTP = (dispatch) => {
    return {
        pendingReservation: (info) => dispatch(pendingReservation(info)),
        openModal: modal => dispatch(openModal(modal)),
        addFilter: (value) => dispatch(addFilter(value)),
        deleteFilter: (value) => dispatch(deleteFilter(value)),
        resetFilter: () => dispatch(resetFilter())
    };
};

export default connect(mSTP, mDTP)(SearchMap);