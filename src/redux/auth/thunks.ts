import {Dispatch} from "redux";
import {AuthAPI} from "../../utils/api";
import {registerAC} from "./actions";

export const auth = () => (dispatch: Dispatch) => {
}

export const registerTC = (email: string, password: string) => async (dispatch: Dispatch) => {
    const response = await AuthAPI.register(email, password)
    dispatch(registerAC(response.data.email, response.data.password))
    console.log(response.data.addedUser)
}


