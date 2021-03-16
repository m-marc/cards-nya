import {Dispatch} from "redux";
import {CardsAPI} from "../../utils/api";
import {AppActionsType, setError} from "../main/appActions";
import {getPacksAC,} from "./packsActions";
import {ThunkAction} from "redux-thunk";
import {IGlobalState} from "../store";

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

export const thunkAddPack = (name: string): ThunkAction<Promise<void>, IGlobalState, unknown, AppActionsType>=>
    async (dispatch) => {
        try {
             await CardsAPI.addPack(name);
            // dispatch(addPackAC(name))
            dispatch(thunkGetPacks())

        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setError(error))
        }
    }