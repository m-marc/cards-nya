import {Dispatch} from "redux";
import {AuthAPI} from "../../utils/api";
import {setError, setLoading, setSuccess} from "../main/appActions";

export const thunkForgotPassword = (email: string) =>
    async (dispatch: Dispatch) => {
        dispatch(setLoading(true))
        try {
            const response = await AuthAPI.forgot(email)
            dispatch(setSuccess(true))
            console.log(response.info)
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
            console.log(response.data.info)
        }
        catch (e) {
            const error = e.response ? e.response.data.error : (e.message + ", more details in the console");
            dispatch(setError(error))
        }
    }