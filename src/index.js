import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {rootReducer} from './redux/rootReducer';

import './scss/style.scss';
import {sagaWatcher} from './redux/sagas';

const saga = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(saga));
saga.run(sagaWatcher);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);