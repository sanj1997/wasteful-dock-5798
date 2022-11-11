import {legacy_createStore,applyMiddleware, combineReducers, compose} from 'redux';
import  {getProductReducer, getProductByIdReducer} from "./product/product.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	getProductReducer,
	getProductByIdReducer
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));
