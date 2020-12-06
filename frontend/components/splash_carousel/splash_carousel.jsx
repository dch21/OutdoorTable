import React from 'react';
import { Link } from 'react-router-dom';
import SplashCarouselItem from "./splash_carousel_item";

class SplashCarousel extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      this.props.searchRestaurant("");
    }

    render() {

        const { results } = this.props;

        if (!Array.isArray(results)) {
            return null;
        }

        const final = this.props.results.sort(() => Math.random() - 0.5)

        return (
            <div>
                    <div className="splash-carousel-trending-header">
                        <br/>
                        <h2>Trending Now in NYC</h2>
                        <hr />  
                    </div>
                    <div className="splash-carousel">
                        {   
                            final.map(result => (
                                <SplashCarouselItem result={result}
                                    key={result.id}
                                />
                            ))
                        }
                    </div>
            </div>          
        );
    } 
}

export default SplashCarousel;

