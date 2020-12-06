import React from "react";
import { Link } from 'react-router-dom';
import UserDropdown from "./user_dropdown_container";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        
    };

    
    render() {

        const { currentUser, logout, openModal } = this.props;
        const signButtons = () => {
            return (
                <div>
                    <button className= "signup-button" onClick={ () => openModal("signUp")}>Sign up</button>
                    <button className="signin-button" onClick={ () => openModal("signIn")}>Sign in</button>
                </div>
            )
        };

        const signedinNav = () => {
            return (
                <div>
                    <UserDropdown firstName={this.props.firstName} logout={logout}/>
                </div>
            )
        }

        return (

            <div>
                <nav>
                    <div className="left-nav">
                        <div >
                            <Link className="home-page" to="/"><img className="logo" src={window.logo} alt="logo" /></Link>

                        </div>
                        <div className="logo-name">
                            <Link className="home-page" to="/"><span >OutdoorTable</span></Link>
                        </div>
                    </div>
                    <div className="right-nav">
                        {currentUser > 0 ? signedinNav() : signButtons() }
                        <i className="fas fa-search" onClick={ () => openModal("search")}></i>
                    </div>
                </nav>
            </div>
        )

    }

}

export default Navbar;

