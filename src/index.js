import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {rootReducer} from './redux/rootReducer';

import './scss/style.scss';

const store = createStore(rootReducer, applyMiddleware(
    thunk
));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);