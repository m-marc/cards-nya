import {combineReducers, createStore} from "redux";
import {authReducer} from "./auth/reducers";
import {profileReducer} from "./profile/reducers";

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
})

export const store = createStore(rootReducer)
export type IGlobalState = ReturnType<typeof rootReducer>