import React from "react";

class SplashSix extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {


        return (
            <div>
                <h2>Featured Areas</h2>
                <hr/>

                <div className="splash-row"> 

                    <div className="splash-panel-container">
                        <p>All Five Boroughs</p>
                        <img className="splash-pic" src={window.nyc} alt="nyc" />
                    </div>
                    
                    <div className="splash-panel-container">
                        <p>Brooklyn</p>
                        <img className="splash-pic" src={window.brooklyn} alt="brooklyn" />
                    </div>

                    <div className="splash-panel-container">
                        <p>Manhattan</p>
                        <img className="splash-pic" src={window.manhattan} alt="manhattan" />
                    </div>

                </div>

                <div className="splash-row">

                    <div className="splash-panel-container">
                        <p>Queens</p>
                        <img className="splash-pic" src={window.queens} alt="queens" />
                    </div>

                    <div className="splash-panel-container">
                        <p>Bronx</p>
                        <img className="splash-pic" src={window.bronx} alt="bronx" />
                    </div>

                    <div className="splash-panel-container">
                        <p>Staten Island</p>
                        <img className="splash-pic" src={window.statenisland} alt="statenisland" />
                    </div>

                </div>

                 
            </div>
        )

    }

}

export default SplashSix;
