import {Dispatch} from "redux";
import {AuthAPI} from "../../utils/api";
import {setUser, registerAC, logOutAC} from "./actions";
import {setError, setLoading, setSuccess} from "../main/appActions";
import {ThunkAction} from "redux-thunk";
import {IGlobalState} from "../store";
import {AuthActionsType} from "./reducers";

export const thunkAuthMe = () : ThunkAction<Promise<void>, IGlobalState, unknown, AuthActionsType> =>
    async (dispatch: Dispatch) => {
        try {
            const response = await AuthAPI.authMe()
            dispatch(setUser(response.data))
        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            console.log(error)
        }
    }

export const thunkLogin = (login: string, password: string, rememberMe: boolean) =>
    async (dispatch: Dispatch) => {
        dispatch(setLoading(true))
        try {
            const response = await AuthAPI.login(login, password, rememberMe)
            dispatch(setUser(response.data))
            dispatch(setSuccess(true))
        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setError(error))
        }
    }

export const thunkLogOut = () =>
    async (dispatch: Dispatch) => {
        try {
            await AuthAPI.logOut()
            dispatch(logOutAC())
            dispatch(setSuccess(true))
        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setError(error))
        }
    }

export const registerTC = (email: string, password: string) => async (dispatch: Dispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await AuthAPI.register(email, password)
        dispatch(registerAC(response.data.email, response.data.password))
        dispatch(setSuccess(true))
    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        dispatch(setError(error))
    }


}

export const thunkForgotPassword = (email: string) =>
    async (dispatch: Dispatch) => {
        dispatch(setLoading(true))
        try {
            await AuthAPI.forgot(email)
            dispatch(setSuccess(true))
        } catch (e) {
            const error = e.response ? e.response.data.error : (e.message + ", more details in the console");
            dispatch(setError(error))
        }
    }

export const thunkSetNewPassword = (password: string, resetPasswordToken: string) =>
    async (dispatch: Dispatch) => {
        dispatch(setLoading(true))
        try {
            await AuthAPI.newpass(password, resetPasswordToken)
            dispatch(setSuccess(true))
        } catch (e) {
            const error = e.response ? e.response.data.error : (e.message + ", more details in the console");
            dispatch(setError(error))
        }
    }

export const thunkUpdateProfile = (name: string, avatar: string) =>
    async (dispatch: Dispatch) => {
        dispatch(setLoading(true))
        try {
            const response = await AuthAPI.updateProfile(name, avatar)
            dispatch(setUser(response.updatedUser))
            dispatch(setSuccess(true))
        } catch (e) {
            const error = e.response ? e.response.data.error : (e.message + ", more details in the console");
            dispatch(setError(error))
        }
    }