export const login = () => ({type: 'Auth/login'})

export const forgotPassword = () => ({type: 'Auth/forgot_password'} as const)

export type AuthActionsType = ReturnType<typeof forgotPassword>