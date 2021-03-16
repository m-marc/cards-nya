import {Dispatch} from "redux";
import {CardsAPI} from "../../utils/api";
import {setError} from "../main/appActions";
import {addPackAC, getPacksAC} from "./packsActions";

export const thunkGetPacks = () =>
    async (dispatch: Dispatch) => {
        try {
           const response =  await CardsAPI.getPacks();
            dispatch(getPacksAC(response.data))
        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setError(error))
        }
    }

export const thunkAddPack = (name: string) =>
    async (dispatch: Dispatch) => {
        try {
             await CardsAPI.addPack(name);
            dispatch(addPackAC(name))
        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setError(error))
        }
    }