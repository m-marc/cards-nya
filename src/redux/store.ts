import {applyMiddleware, combineReducers, createStore} from "redux";
import {authReducer} from "./auth/reducers";
import {profileReducer} from "./profile/reducers";
import thunk from "redux-thunk";
import {appReducer} from "./main/appReducers";

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type IGlobalState = ReturnType<typeof rootReducer>