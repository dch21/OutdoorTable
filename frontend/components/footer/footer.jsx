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
                            <a href="https://www.linkedin.com/in/daniel-chu-5577b376/" target="_blank"><i className="fab fa-linkedin" id="linkedin"></i></a>
                            <a href="https://github.com/dch21" target="_blank"><i className="fab fa-github" id="github"></i></a>
                            <a href="https://angel.co/u/daniel-chu-18" target="_blank"><i className="fab fa-angellist" id="angellist"></i></a>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Footer;



