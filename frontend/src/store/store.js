import {legacy_createStore,applyMiddleware, combineReducers, compose} from 'redux';
import  {productReducer} from "./product/product.reducer";
import  {wishlistReducer} from "./wishlist/wishlist.reducer";
import  {orderReducer} from "./order/order.reducer";
import thunk from "redux-thunk";
import authReducer from './auth/auth.reducer';
import { cartReducer } from './Cart/cart.reducer';


const rootReducer = combineReducers({
	product:productReducer,
	auth:authReducer,
	cart:cartReducer,
	wishlist:wishlistReducer,
	order:orderReducer,
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));
