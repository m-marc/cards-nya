import {Dispatch} from "redux";
import {AuthAPI} from "../../utils/api";
import {loginAC, registerAC, setUser} from "./actions";
import {setError, setLoading, setSuccess} from "../main/appActions";

export const loginTC = (login: string, password: string, rememberMe: boolean) =>
    async (dispatch: Dispatch) => {
        try {
            const response = await AuthAPI.login(login, password, rememberMe)
            dispatch(loginAC(response.data))
        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setError(error))
        }
    }

export const registerTC = (email: string, password: string) => async (dispatch: Dispatch) => {
    const response = await AuthAPI.register(email, password)
    dispatch(registerAC(response.data.email, response.data.password))
}

export const thunkForgotPassword = (email: string) =>
    async (dispatch: Dispatch) => {
        dispatch(setLoading(true))
        try {
            const response = await AuthAPI.forgot(email)
            dispatch(setSuccess(true))
        }
        catch (e) {
            const error = e.response ? e.response.data.error : (e.message + ", more details in the console");
            dispatch(setError(error))
        }
    }

export const thunkSetNewPassword = (password: string, resetPasswordToken: string) =>
    async (dispatch: Dispatch) => {
        dispatch(setLoading(true))
        try {
            let response = await AuthAPI.newpass(password, resetPasswordToken)
            dispatch(setSuccess(true))
        }
        catch (e) {
            const error = e.response ? e.response.data.error : (e.message + ", more details in the console");
            dispatch(setError(error))
        }
    }

export const thunkUpdateProfile = (name: string, avatar: string) =>
    async (dispatch: Dispatch) => {
        try {
            const response = await AuthAPI.updateProfile(name, avatar)
            dispatch(setUser(response.updatedUser))
            dispatch(setSuccess(true))
        }
        catch (e) {
            const error = e.response ? e.response.data.error : (e.message + ", more details in the console");
            dispatch(setError(error))
        }
    }