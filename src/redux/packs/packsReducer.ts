// import {AppActionsType} from "./appActions";

import {PacksActionsType} from "./packsActions";
import {CardPacksResponseType} from "../../utils/api";

const packsInitialState = {
    cardPacks: []  as Array<CardPacksResponseType>,
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 1,
    pageCount: 20
}

export type packsInitialStateType = typeof packsInitialState

export const packsReducer = (state = packsInitialState, action: PacksActionsType): packsInitialStateType => {
    switch (action.type) {
        case "packs/GET_PACKS":
            return {
                ...state,
                ...action.packs
            }

        default:
            return state
    }
}