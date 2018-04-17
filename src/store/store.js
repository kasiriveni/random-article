
import {createStore,applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'

import RootReducer from '../reducer/RootReducer';

const middleWare = [thunk,logger];

const initialState = "";

const store =createStore(
    RootReducer,
 
    compose(
        applyMiddleware(...middleWare)
    )

);



export default store;