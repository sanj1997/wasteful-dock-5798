import { ADMIN_PRODUCT_GET_ERROR, ADMIN_PRODUCT_GET_LOADING, ADMIN_PRODUCT_GET_SUCCESS } from "./admin.types";
import { ADMIN_USER_GET_ERROR, ADMIN_USER_GET_LOADING, ADMIN_USER_GET_SUCCESS } from "./admin.types";
import { ADMIN_ORDER_GET_ERROR, ADMIN_ORDER_GET_LOADING, ADMIN_ORDER_GET_SUCCESS } from "./admin.types";

import { ADMIN_PRODUCT_DELETE_LOADING, ADMIN_PRODUCT_DELETE_ERROR, ADMIN_PRODUCT_DELETE_SUCCESS } from "./admin.types";
import { ADMIN_USER_DELETE_LOADING, ADMIN_USER_DELETE_ERROR, ADMIN_USER_DELETE_SUCCESS } from "./admin.types";
import { ADMIN_ORDER_DELETE_LOADING, ADMIN_ORDER_DELETE_ERROR, ADMIN_ORDER_DELETE_SUCCESS } from "./admin.types";

//admin product initial
const getAdminProductInitial = {
	loading: false,
	product: {
		data: [],
		status: false
	},
	error: false,
};

//admin product initial
const getAdminUserInitial = {
	loading: false,
	user: {
		data: [],
		status: false
	},
	error: false,
};

//admin product initial
const getAdminOrderInitial = {
	loading: false,
	order: {
		data: [],
		status: false
	},
	error: false,
};

//delete product initial
const deleteAdminProductInitial = {
	loading: false,
	product: "Not delete Product",
	error: false,
};

//delete order initial
const deleteAdminOrderInitial = {
	loading: false,
	order: "Not delete Order",
	error: false,
};

const deleteAdminUserInitial = {
	loading: false,
	user: "Not delete User",
	error: false,
};

//get admin product
export const getAdminProductReducer = (state = getAdminProductInitial, {type, payload}) =>{
	switch (type){
		case ADMIN_PRODUCT_GET_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case ADMIN_PRODUCT_GET_ERROR: {
			return {
				...state,
				loading: false,
				error: true
			};
		}
		case ADMIN_PRODUCT_GET_SUCCESS: {
			return {
				...state,
				loading: false,
				error: false,
				product: {
					data: payload,
					status: true
				}
			};
		} 
		default: {
			return state;
		}
	}
} 

export const getAdminUserReducer = (state = getAdminUserInitial, {type, payload}) =>{
	switch (type){
		case ADMIN_USER_GET_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case ADMIN_USER_GET_ERROR: {
			return {
				...state,
				loading: false,
				error: true
			};
		}
		case ADMIN_USER_GET_SUCCESS: {
			return {
				...state,
				loading: false,
				error: false,
				user: {
					data: payload,
					status: true
				}
			};
		} 
		default: {
			return state;
		}
	}
} 

//order get in admin
export const getAdminOrderReducer = (state = getAdminOrderInitial, {type, payload}) =>{
	switch (type){
		case ADMIN_ORDER_GET_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case ADMIN_ORDER_GET_ERROR: {
			return {
				...state,
				loading: false,
				error: true
			};
		}
		case ADMIN_ORDER_GET_SUCCESS: {
			return {
				...state,
				loading: false,
				error: false,
				order: {
					data: payload,
					status: true
				}
			};
		} 
		default: {
			return state;
		}
	}
} 


//delete admin product
export const deleteAdminProductReducer = (state = deleteAdminProductInitial, {type, payload}) =>{
	switch (type){
		case ADMIN_PRODUCT_DELETE_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case ADMIN_PRODUCT_DELETE_ERROR: {
			return {
				...state,
				loading: false,
				error: true
			};
		}
		case ADMIN_PRODUCT_DELETE_SUCCESS : {
			return {
				...state,
				loading: false,
				error: false,
				product: payload
			};
		} 
		default: {
			return state;
		}
	}
}



//delete admin user
export const deleteAdminUserReducer = (state = deleteAdminUserInitial, {type, payload}) =>{
	switch (type){
		case ADMIN_USER_DELETE_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case ADMIN_USER_DELETE_ERROR: {
			return {
				...state,
				loading: false,
				error: true
			};
		}
		case ADMIN_USER_DELETE_SUCCESS: {
			return {
				...state,
				loading: false,
				error: false,
				user: payload
			};
		} 
		default: {
			return state;
		}
	}
} 


//ORDER DELETE
export const deleteAdminOrderReducer = (state = deleteAdminOrderInitial, {type, payload}) =>{
	switch (type){
		case ADMIN_ORDER_DELETE_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case ADMIN_ORDER_DELETE_ERROR: {
			return {
				...state,
				loading: false,
				error: true
			};
		}
		case ADMIN_ORDER_DELETE_SUCCESS: {
			return {
				...state,
				loading: false,
				error: false,
				order: payload
			};
		} 
		default: {
			return state;
		}
	}
} 