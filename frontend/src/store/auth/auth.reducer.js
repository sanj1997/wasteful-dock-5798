import { EMAIL_VERIFY_ERROR, EMAIL_VERIFY_LOADING, EMAIL_VERIFY_SUCCESS, SIGN_IN_ERROR, SIGN_IN_LOADING, SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS, SIGN_UP_ERROR, SIGN_UP_LOADING, SIGN_UP_SUCCESS } from "./auth.types"


const InitialState = {
    Rtoken: JSON.parse(localStorage.getItem("asv")) || null,
    Mtoken: JSON.parse(localStorage.getItem("asv")) || null,
    loading: false,
    error: false,
    firstName: JSON.parse(localStorage.getItem("firstName")) || null,
    lastName: JSON.parse(localStorage.getItem("lastName")) || null,
    userName: JSON.parse(localStorage.getItem("userName")) || null,
    message: null,
    isVerified: false,
    userId: JSON.parse(localStorage.getItem("yql")) || null,
    role: JSON.parse(localStorage.getItem("role")) || null
}

const authReducer = (state = InitialState, { type, payload }) => {
    switch (type) {
        case SIGN_UP_LOADING: return {
            ...state, loading: true
        }

        case SIGN_UP_SUCCESS: return {
            ...state, loading: false, message: payload
        }

        case SIGN_UP_ERROR: return {
            ...state, loading: false, error: true
        }

        case EMAIL_VERIFY_LOADING: return {
            ...state, loading: true
        }

        case EMAIL_VERIFY_SUCCESS:
            console.log("abc")
            return {
                ...state, isVerified: true, loading: false
            }
        case EMAIL_VERIFY_ERROR: return {

            ...state, isVerified: false, error: true, loading: false
        }

        case SIGN_IN_LOADING: return {
            ...state, loading: true
        }
        case SIGN_IN_SUCCESS:
            localStorage.setItem("asv", JSON.stringify(payload.asv))
            localStorage.setItem("csv", JSON.stringify(payload.csv))
            localStorage.setItem("firstName", JSON.stringify(payload.firstName))
            localStorage.setItem("lastName", JSON.stringify(payload.lastName))
            localStorage.setItem("userName", JSON.stringify(payload.userName))
            localStorage.setItem("yql", JSON.stringify(payload.uId))
            localStorage.setItem("role", JSON.stringify(payload.role))
            return {
                ...state, loading: false, Rtoken: payload.csv, Mtoken: payload.asv, firstName: payload.firstName, lastName: payload.lastName, userName: payload.userName, userId: payload.uId
            }
        case SIGN_IN_ERROR: return {
            ...state, loading: false, error: true
        }
        case SIGN_OUT_SUCCESS:
            localStorage.removeItem("asv")
            localStorage.removeItem("csv")
            localStorage.removeItem("firstName")
            localStorage.removeItem("lastName")
            localStorage.removeItem("yql")
            localStorage.removeItem("userName")
            localStorage.removeItem("role")
            return {
                ...state, Mtoken: null, Rtoken: null, firstName: null, lastName: null, userName: null, userId: null
            }
        default: return state

    }

}
export default authReducer