
import {createStore,applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'

import RootReducer from '../reducer/RootReducer';

const middleWare = [thunk,logger];

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =createStore(
    RootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(...middleWare)
    )

);



export default store;