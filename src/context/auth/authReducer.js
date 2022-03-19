import { SIGNUP_USER, LOGIN_USER, GET_USER, AUTH_FAIL, CLEAR_ERROR } from "../types";

export default (state, action) => {
	switch (action.type) {
		case GET_USER:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: action.payload.user
			};

		case SIGNUP_USER:
			return {
				...state,
				loading: false
			};
		case LOGIN_USER:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				error: null,
				user: action.payload.user
			};

		case AUTH_FAIL:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				isAuthenticated: false,
				user: null,
				loading: true,
				error: action.payload
			};

		case CLEAR_ERROR:
			return {
				...state,
				error: null
			};
		default:
			return state;
	}
};