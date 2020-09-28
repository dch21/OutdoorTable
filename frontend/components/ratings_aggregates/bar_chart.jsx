import React from "react";

class BarChart extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        
            
        // TO_DO: use iternation here
        return (
            <div>
                <div className="bar-chart">
                    <label>5
                        <div className="bar-outside">
                            <div className="bar-inside" style={{ width: (((this.props.ratings[0] / this.props.total) * 100).toString() + "%") }} >
                            </div>
                        </div>
                    </label>

                    <label>4
                        <div className="bar-outside">
                            <div className="bar-inside" style={{ width: (((this.props.ratings[1] / this.props.total) * 100).toString() + "%") }} >
                            </div>
                        </div>
                    </label>

                    <label>3
                        <div className="bar-outside">
                            <div className="bar-inside" style={{ width: (((this.props.ratings[2] / this.props.total) * 100).toString() + "%") }} >
                            </div>
                        </div>
                    </label>

                    <label>2
                        <div className="bar-outside">
                            <div className="bar-inside" style={{ width: (((this.props.ratings[3] / this.props.total) * 100).toString() + "%") }} >
                            </div>
                        </div>
                    </label>

                    <label>1
                        <div className="bar-outside">
                            <div className="bar-inside" style={{ width: (((this.props.ratings[4] / this.props.total) * 100).toString() + "%") }} >
                            </div>
                        </div>
                    </label>



                </div>
            </div>
        )

    }

}

export default BarChart;
