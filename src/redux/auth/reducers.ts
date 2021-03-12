import {logOutAC, setUser} from "./actions";

export type UserType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number // количество колод

    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean // подтвердил ли почту
    rememberMe: boolean
}

const initialState = {
    userData: {} as UserType,
    isLoggedIn: false,
}

type initialStateType = typeof initialState
type ActionsType = ReturnType<typeof setUser> | ReturnType<typeof logOutAC>

export const authReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "Auth/login":
            return {...state, userData: action.userData, isLoggedIn: true}
        case "Auth/logout":
            return {...state, isLoggedIn: false}
        default:
            return state
    }
}
