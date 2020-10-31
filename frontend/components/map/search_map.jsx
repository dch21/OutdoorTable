import React from 'react';
// import ReactDOM from 'react-dom';
// import MarkerManager from "../../util/marker_manager";

class SearchMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const mapCenter = { lat: 40.708081, lng: -73.933709 };
        
        const map = new google.maps.Map(
            document.getElementById('search-map'), { zoom: 10, center: mapCenter });

        // const mapOptions = { lat: 40.708081, lng: -73.933709, zoom: 10 };
        
        // const map = new google.maps.Map(
        //     document.getElementById('map'), { zoom: 10, center: mapCenter });
        
        // this.map = new google.maps.Map(map, mapOptions);
        // this.MarkerManager = new MarkerManager(this.map)
        this.props.final.forEach( (restaurant) => this.createMarker(restaurant, map));

        
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

    }

    openInfo(map, marker) {
        
        const window = new google.maps.InfoWindow({
            content: marker.name
        });
        window.open(map, marker);
    }



    render() {
        
        return (
        <div id="search-map" ref="map">
            Map
        </div>
        );
  }
  

}

export default SearchMap;