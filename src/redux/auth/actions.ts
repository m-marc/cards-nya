export const login = () => ({type: 'Auth/login'})

export const registerAC = (email: string, password: string): registerActionType => {
    return {type: 'REGISTER', email, password}
}

export type registerActionType = {
    type: 'REGISTER',
    email: string
    password: string
}