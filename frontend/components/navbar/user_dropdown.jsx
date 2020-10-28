import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';



class UserDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };

        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleLinkUser = this.handleLinkUser.bind(this);

    }

    handleBlur(e) {
        this.setState({ show: false });
    }

    handleClick() {
        this.setState({ show: !this.state.show });
    }

    handleLinkUser() {
        this.props.history.push(`users/${this.props.userId}`);
    }

    render() {
        return (
            <div>
                <button className="user-dropdown"
                    style={{ position: 'relative' }}
                    onBlur={this.handleBlur}
                    onClick={this.handleClick}
                >
                    Hi, {this.props.firstName} &#x2193;
            {this.state.show ? (
                        <div className="user-dropdown-menu"
                            onClick={e => e.stopPropagation()}
                            style={{ position: 'absolute', top: '100%'}}
                        >
                            <span onClick={this.handleLinkUser}>My Dining History</span> 
                            <br/>
                            <span>My Saved Restaurants</span>
                            <br/>
                            <span onClick={this.props.logout}>Sign Out</span>
                            <br/>
                        </div>
                    ) : null}
                </button>
            </div>
        )
    }
}
//use span in links since it is a non focusable html element
export default withRouter(UserDropdown)