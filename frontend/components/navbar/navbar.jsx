import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        
    };

    
    render() {

        const { currentUser, logout, openModal } = this.props;
        const signButtons = () => {
            return (
                <div>
                  <button onClick={ () => openModal("signUp")}>Sign Up</button>
                  <button onClick={ () => openModal("signIn")}>Sign In</button>
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
                    <div>Logo 
                        <i className="fas fa-map-marker-alt"></i>  
                    </div>
                    {currentUser > 0 ? signedinNav() : signButtons() }
                    <i className="fas fa-search"></i>
                </nav>
            </div>
        )

    }

}

export default Navbar;

// PreModal
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