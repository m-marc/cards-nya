import {UserType} from "./reducers";

export const loginAC = (userData: UserType) => ({type: 'Auth/login', userData} as const)

export const registerAC = (email: string, password: string): registerActionType => {
    return {type: 'REGISTER', email, password}
}
export const setUser = (userData: UserType) => ({type: 'Profile/SET_USER', userData} as const)

export type registerActionType = {
    type: 'REGISTER',
    email: string
    password: string
}