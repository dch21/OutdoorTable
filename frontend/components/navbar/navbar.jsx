import React from "react";
import { Link } from "react-router-dom"

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        
    };

    
    render() {

        const { currentUser, logout } = this.props;
        const signButtons = () => {
            return (
                <nav>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/signin">Sign In</Link>
                </nav>
            )
        };

        const signedinNav = () => {
            return (
            <nav>
                <button onClick={logout}>Log Out</button>
            </nav>
            )
        }

        return (

            <div>
                {currentUser > 0 ? signedinNav() : signButtons() }
            </div>
        )

    }

}

export default Navbar;