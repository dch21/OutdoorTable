import React from "react";
import ReactDOM from "react-dom";
import { postUser, postSession, deleteSession } from "./util/session_api";
import configureStore from "./store/store"


document.addEventListener('DOMContentLoaded', () => {
    
    const store = configureStore();
    const root = document.getElementById('root');

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.postSession = postSession;
    window.postUser = postUser;
    window.deleteSession = deleteSession;


    ReactDOM.render(<h1>Testing is working, hello daniel</h1>, root);
});

