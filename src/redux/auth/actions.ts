import {UserType} from "./reducers";

export const setUser = (userData: UserType) => ({type: 'Auth/login', userData} as const)

export const registerAC = (email: string, password: string): registerActionType => {
    return {type: 'REGISTER', email, password}
}

export type registerActionType = {
    type: 'REGISTER',
    email: string
    password: string
}