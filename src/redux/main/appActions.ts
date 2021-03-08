export const setLoading = (isLoading: boolean) => ({type: 'app/SET_LOADING', isLoading} as const)
export const setError = (error: string) => ({type: 'app/SET_ERROR', error} as const)
export const setSuccess = (success: boolean) => ({type: 'app/SET_SUCCESS', success} as const)

export type AppActionsType = ReturnType<typeof setLoading> | ReturnType<typeof setError>
    | ReturnType<typeof setSuccess>