import {applyMiddleware, combineReducers, createStore} from "redux";
import {authReducer} from "./auth/reducers";
import {profileReducer} from "./profile/reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type IGlobalState = ReturnType<typeof rootReducer>