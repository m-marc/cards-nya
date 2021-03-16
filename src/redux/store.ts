import {applyMiddleware, combineReducers, createStore} from "redux";
import {authReducer} from "./auth/reducers";
import {profileReducer} from "./profile/reducers";
import thunk from "redux-thunk";
import {appReducer} from "./main/appReducers";
import {packsReducer} from "./packs/packsReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    app: appReducer,
    packs: packsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type IGlobalState = ReturnType<typeof rootReducer>