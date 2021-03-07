import {UserType} from "./reducers";

export const loginAC = (userData: UserType) => ({type: 'Auth/login', userData} as const)
export const setErrorAC = (error: string) => ({type: 'Auth/error', error} as const)
