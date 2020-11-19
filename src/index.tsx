import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
} from "react-router-dom";

import App from './App';
import 'antd/dist/antd.css'
import history from './config/history';

const router = (
    <Router history={history}>
        <App />
    </Router>
)
ReactDOM.render(
    <React.StrictMode>
        {router}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

