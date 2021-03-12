import {UserType} from "./reducers";

export const setUser = (userData: UserType) => ({type: 'Auth/login', userData} as const)

export const registerAC = (email: string, password: string) => ( {type: 'register', email, password} as const)

export const logOutAC = () => ( {type: 'Auth/logout'} as const)
