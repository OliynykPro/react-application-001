import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USERS_DATA = 'SET_USERS_DATA';

let initialState = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }

        default:
            return state;
    }
}

export const setAuthUsersDataAC = (userId, email, login, isAuth) => ({type: SET_USERS_DATA, payload: {userId, email, login, isAuth}});

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me().then(response => {
        if(response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUsersDataAC(id, email, login, true));
        }
    });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        debugger;
        if(response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: message}));
        }
    });
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setAuthUsersDataAC(null, null, null, false));
        }
    });
}

export default authReducer;