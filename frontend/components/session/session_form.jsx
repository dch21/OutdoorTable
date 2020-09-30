import React from "react";

class SessionForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            location: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then( this.props.closeModal );
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.action({ email: "demo@test.com", password: "testing" }).then(this.props.closeModal);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    clear(field) {
        return e => this.setState({ [field]: "" });
    }

    componentWillUnmount() {
        this.props.clearErrors();
    } 

    renderErrors() {
        return (
            <ul className="errors-list">
                {this.props.errors.map( (error, idx) => (
                    <li key={idx}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {

        return (
            
            <div className="login-container">
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <h3 className="modal-header">{this.props.formType === "Sign Up" ? "Welcome to OutsideTable!" : "Please sign in"}</h3>
                    <br/>
                    {this.props.formType === "Sign Up" &&
                    <div>
                        <input type="text" className="sign-inup"
                            value={this.state.first_name}
                            onClick={this.clear("first_name")}
                            onChange={this.update("first_name")}
                            placeholder="First Name"
                        />
                    </div>
                    }
                    
                    {this.props.formType === "Sign Up" &&
                    <div>
                        <input type="text" className="sign-inup"
                            value={this.state.last_name}
                            onClick={this.clear("last_name")}
                            onChange={this.update("last_name")}
                            placeholder="Last Name"
                        />
                    </div>
                    }
                    
                    <div>
                        <input type="text" className="sign-inup"
                            value={this.state.email}
                            onClick={this.clear("email")}
                            onChange={this.update("email")}
                            placeholder="Email"
                        />
                    </div>
                    

                    <div>
                        <input type="password" className="sign-inup"
                            value={this.state.password}
                            onClick={this.clear("password")}
                            onChange={this.update("password")}
                            placeholder="Password"
                        />
                    </div>

                    {this.props.formType === "Sign Up" &&
                    <div>
                        <input type="text" className="sign-inup"
                            value={this.state.location}
                            onClick={this.clear("location")}
                            onChange={this.update("location")}
                            placeholder="Primary Dining Location"
                        />
                    </div>
                    }       
                    <br/>
                    <button className="form-button" type="submit">{this.props.formType === "Sign Up" ? "Create Account" : "Sign In"}</button>
                    <br />
                </form>

                {this.props.formType === "Please Sign In" &&
                    <div>
                        <button className="form-button" onClick={this.demoLogin}>Demo User</button>
                        <br/>
                        <br/>
                        <button className="account-button" onClick={() => this.props.openModal("signUp")}>New to OutDoorTable?<p> Create an account.</p></button>
                        
                    </div>
                }
                
            </div>
        )

    }

}

export default SessionForm;