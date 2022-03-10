import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import {rootReducer} from "./redux/rootReducer";
import {spamFilter} from "./redux/middleware";

const composeEnhancer = compose(applyMiddleware(thunk, spamFilter),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, composeEnhancer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
