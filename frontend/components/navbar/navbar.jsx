import React from "react";

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
                    <button onClick={logout}>Log Out</button>
                </div>
            )
        }

        return (

            <div>
                <nav>
                    <div className="left-nav">
                        <img className="logo" src={window.logo} alt="logo" />
                        <span>OutdoorTable</span>
                        {/* <i className="fas fa-map-marker-alt"></i>   */}
                    </div>
                    <div className="right-nav">
                        {currentUser > 0 ? signedinNav() : signButtons() }
                        <i className="fas fa-search"></i>
                    </div>
                </nav>
            </div>
        )

    }

}

export default Navbar;

// PreModal
// import { Link } from "react-router-dom";
// render() {

//     const { currentUser, logout } = this.props;
//     const signButtons = () => {
//         return (
//             <div>
//                 <Link to="/signup">Sign Up</Link>
//                 <Link to="/signin">Sign In</Link>
//             </div>
//         )
//     };

//     const signedinNav = () => {
//         return (
//             <div>
//                 <button onClick={logout}>Log Out</button>
//             </div>
//         )
//     }

//     return (

//         <div>
//             <nav>
//                 <div>Logo
//                         <i class="fas fa-map-marker-alt"></i>
//                 </div>
//                 {currentUser > 0 ? signedinNav() : signButtons()}
//                 <i class="fas fa-search"></i>
//             </nav>
//         </div>
//     )