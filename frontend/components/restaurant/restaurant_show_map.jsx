import React from "react";

class RestaurantShowMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const mapCenter = { lat: this.props.restaurant.lat, lng: this.props.restaurant.lng };
        const restaurantLocation = { lat: this.props.restaurant.lat, lng: this.props.restaurant.lng };
        
        const map = new google.maps.Map(
            document.getElementById('map'), { zoom: 15, center: mapCenter });
        
        const marker = new google.maps.Marker({ position: restaurantLocation, map: map });
    }

    render() {
        return (
                <div id="map" ref="map"> 
                Map
                </div>
        )
    }
}

export default RestaurantShowMap;
