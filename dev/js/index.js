import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import allReducers from './reducers'

const store = createStore(allReducers);

ReactDOM.render(
    <h1>
        Hey now
    </h1>,
    document.getElementById('root')
);
