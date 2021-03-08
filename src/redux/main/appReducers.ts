import {AppActionsType} from "./appActions";

const appInitialState = {
    isLoading: false,
    error: "",
    success: false
}

type appInitialStateType = typeof appInitialState

export const appReducer = (state: appInitialStateType = appInitialState, action: AppActionsType): appInitialStateType => {
    switch (action.type) {
        case "app/SET_LOADING":
            return {...state, isLoading: action.isLoading, success: false, error: ""}
        case "app/SET_ERROR":
            return {...state, error: action.error, success: false, isLoading: false}
        case "app/SET_SUCCESS":
            return {...state, success: action.success, isLoading: false, error: ""}
        default:
            return state
    }
}