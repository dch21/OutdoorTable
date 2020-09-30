import React from "react";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
                <div >

                    <div className="footer-container">
                        <div className="footer-left">
                            <p>Inspired by OpenTable</p>
                            <p> Logo Icon from <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Flaticon</a> </p>
                        </div>

                        <div className="footer-right">
                            <i className="fab fa-github"></i>
                            <i className="fab fa-linkedin"></i>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Footer;



// Images from Yelp
