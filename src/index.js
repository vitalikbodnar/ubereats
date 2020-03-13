import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import allReducers from './store/reducers';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import mainSaga from './store/sagas/sagas';
import { composeWithDevTools } from 'redux-devtools-extension';



const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    allReducers,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(mainSaga);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
