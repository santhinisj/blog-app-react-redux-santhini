import { createStore,applyMiddleware } from "redux";
import blogs from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";

const store = createStore( 
    blogs,
    composeWithDevTools(
    applyMiddleware(thunk)
    )
);

export default store;