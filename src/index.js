import React,{Component} from 'react';
import {render} from 'react-dom';
import { Provider } from "react-redux";


import Articles from './component/Articles'
import store from './store/store'
const root =document.getElementById("root")
render(
    <Provider  store={store}>
        <Articles/>
    </Provider>,
    root
)