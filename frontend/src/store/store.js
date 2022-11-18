import {legacy_createStore,applyMiddleware, combineReducers, compose} from 'redux';
import  {getProductReducer, getProductByIdReducer} from "./product/product.reducer";
import  {getWishlistReducer,getWishlistByIdReducer, deleteWishlistReducer} from "./wishlist/wishlist.reducer";
import  {getOrderReducer, getOrderByIdReducer, deleteOrderReducer} from "./order/order.reducer";
import thunk from "redux-thunk";
import authReducer from './auth/auth.reducer';
import { cartReducer } from './Cart/cart.reducer';


const rootReducer = combineReducers({
	getProductReducer,
	getProductByIdReducer,
	auth:authReducer,
	cart:cartReducer,
	getWishlistReducer,
	getOrderReducer,
	getOrderByIdReducer,
	deleteOrderReducer,

});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));
