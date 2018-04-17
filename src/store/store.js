
import {createStore,applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import RootReducer from '../reducer/RootReducer';

const middleWare = [thunk];

const initialState = "";

const store =createStore(
    RootReducer,
 
    compose(
        applyMiddleware(...middleWare)
    )

);



export default store;