import React from "react";

class RestaurantShowMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const mapCenter = { lat: 40.723138, lng: -73.977839 };
        const restaurantLocation = { lat: this.props.restaurant.lat, lng: this.props.restaurant.lng };
        
        const map = new google.maps.Map(
            document.getElementById('map'), { zoom: 13, center: mapCenter });
        
        const marker = new google.maps.Marker({ position: restaurantLocation, map: map });
    }

    render() {
        return (
            <div id="map" ref="map"> 

            </div>
        )
    }
}

export default RestaurantShowMap;
