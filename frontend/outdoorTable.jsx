import React from "react";
import ReactDOM from "react-dom";
import { postUser, postSession, deleteSession } from "./util/session_api"


document.addEventListener('DOMContentLoaded', () => {

    window.postSession = postSession;
    window.postUser = postUser;
    window.deleteSession = deleteSession;


    const root = document.getElementById('root');

    ReactDOM.render(<h1>Testing is working</h1>, root);
});

