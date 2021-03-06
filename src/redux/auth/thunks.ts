import {Dispatch} from "redux";
import {AuthAPI} from "../../utils/api";
import {AuthActionsType} from "./actions";

export const auth = () => (dispatch: Dispatch) => {}

export const thunkForgotPassword = (email: string, from: string, message: string) =>
    async (dispatch: Dispatch<AuthActionsType>) => {
        try {
            let response = await AuthAPI.forgot(email, from, message)
            console.log(response.data.info)
        }
        catch (error) {
            throw error
        }
    }