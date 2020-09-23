import React from "react";

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getRestaurant(this.props.restaurantId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.restaurantId !== prevProps.match.params.restaurantId ) {
            this.props.getRestaurant(this.props.restaurantId);
        }
    }

    render() {

        if (!this.props.restaurant) {
            return null;
        }

        return (
            <div >
                {this.props.restaurant.name}
                {this.props.restaurant.address}
                {this.props.restaurant.phone_num}
            </div>
        )
    }

}

export default RestaurantShow;


