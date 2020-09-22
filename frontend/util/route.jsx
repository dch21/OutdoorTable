import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mSTP = state => {
    return {
        loggedIn: Boolean(state.session.id)
    };
};

const Auth = ({ component: Component, path, loggedIn }) => (

    <Route 
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/" /> : <Component {...props} /> 
        )}
    />
);

export const AuthRoute = withRouter(connect(mSTP, null)(Auth))
