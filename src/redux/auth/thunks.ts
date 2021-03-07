import {Dispatch} from "redux";
import {AuthAPI} from "../../utils/api";
import {loginAC, setErrorAC} from "./actions";

export const auth = () => (dispatch: Dispatch) => {
}

export const loginTC = (login: string, password: string, rememberMe: boolean) =>
    async (dispatch: Dispatch) => {
        try {
            const response = await AuthAPI.login(login, password, rememberMe)
            dispatch(loginAC(response.data))
        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setErrorAC(error))
        }
    }
