import {loginAC} from "./actions";

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
type ActionsType = ReturnType<typeof loginAC>

export const authReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "Auth/login":
            return {...state, userData: action.userData, isLoggedIn: true}
        default:
            return state
    }
}
