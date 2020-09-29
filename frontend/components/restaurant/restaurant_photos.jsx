import React from "react";

class RestaurantPhotos extends React.Component {
    constructor(props) {
        super(props);
    }

  
    render() {
        const name1 = this.props.name.substring(0, 4) + "1";
        const name2 = this.props.name.substring(0, 4) + "2";
        const name3 = this.props.name.substring(0, 4) + "3";

        return (
        
        <div>
            <hr/>
                <img className="food-pic" src={window[`${name1}`]} alt="food" />
                <img className="food-pic" src={window[`${name2}`]} alt="food" />
                <img className="food-pic" src={window[`${name3}`]} alt="food" />
        </div>
        )
    }
}

export default RestaurantPhotos;
