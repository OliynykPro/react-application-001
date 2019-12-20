import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-page-reducer";
import profileReducer from "./profile-page-reducer";
import usersReducer from "./users-page-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;