import React from "react";

class RestaurantDetailSidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    


    render() {

        const { neighborhood, phone_num, dining_style, cuisine, dress_code, parking_details, public_transit, payment, lat, lng, address, hours } = this.props.restaurant;

        return (

            <div>
                <ul className="restaurant-detail-sidebar">
                    <i className="fas fa-map-marker-alt"><a target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}>{address}</a></i>
                    <br/>
                   
                    <li><i className="far fa-building"><span> Neigborhood</span></i>
                        <p>{neighborhood}</p>
                    </li>

                    <li><i className="far fa-clock"><span> Hours</span></i>
                        <p>{hours}</p>                   
                    </li>

                    <li><i className="fas fa-phone"><span> Phone Number</span></i>
                        <p>{phone_num}</p>
                    </li>

                    <li><i className="fas fa-utensils"><span> Dining Style</span></i>
                        <p>{dining_style} </p>
                    </li>
                
                    <li><i className="fas fa-cookie-bite"><span> Cuisine</span></i>
                        <p>{cuisine}</p>
                    </li>

                    <li><i className="fas fa-hat-cowboy-side"><span> Dress Code</span></i>
                        <p>{dress_code}</p>
                    </li>

                    <li><i className="fas fa-parking"><span> Parking Details</span></i>
                        <p>{parking_details}</p>
                    </li>

                    <li><i className="fas fa-subway"><span> Public Transit</span></i>
                        <p>{public_transit}</p>

                    </li>

                    <li><i className="far fa-credit-card"><span> Payment</span></i>
                        <p>{payment}</p>
                    </li>
                                

                </ul>
            </div>
        )
    }

}

export default RestaurantDetailSidebar;
