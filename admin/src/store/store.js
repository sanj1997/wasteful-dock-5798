import {legacy_createStore,applyMiddleware, combineReducers, compose} from 'redux';
import  {getAdminProductReducer,
		getAdminUserReducer,
		getAdminOrderReducer,

	deleteAdminProductReducer,
	deleteAdminUserReducer,
	deleteAdminOrderReducer,} from "./admin/admin.reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
	getAdminProductReducer,
	getAdminUserReducer,
	getAdminOrderReducer,

	deleteAdminProductReducer,
	deleteAdminUserReducer,
	deleteAdminOrderReducer,
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));
