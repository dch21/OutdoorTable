import React from "react";

//make errors

class SessionForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            location: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {

        return (
            
            <div>
                {this.props.formType === "Sign Up" ? "Welcome to OutsideTable!" : "Please sign in"}
                
                <form onSubmit={this.handleSubmit}>
                    <br/>
                    {this.props.formType === "Sign Up" &&
                    <div>
                        <label>First Name
                            <input type="text"
                                value={this.state.firstName}
                                onChange={this.update("firstName")}
                            />
                        </label>
                        <br/>
                    </div>
                    }
                    
                    {this.props.formType === "Sign Up" &&
                    <div>
                        <label>Last Name
                            <input type="text"
                                value={this.state.lastName}
                                onChange={this.update("lastName")}
                            />
                        </label>
                        <br/>
                    </div>
                    }
                    
                    <label>Email
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                        />
                    </label>
                    <br/>

                    <label>Password
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update("password")}
                        />
                    </label>
                    <br/>

                    {this.props.formType === "Sign Up" &&
                    <div>
                        <label>Location
                            <input type="text"
                                value={this.state.location}
                                onChange={this.update("location")}
                            />
                        </label>
                        <br/>
                    </div>
                    }       
                    <br/>
                    <button type="submit">{this.props.formType === "Sign Up" ? "Create Account" : "Sign In"}</button>
                </form>
            </div>
        )

    }

}

export default SessionForm;