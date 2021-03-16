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
        case "packs/ADD_PACK":
        //     let newPack = {
        //     _id: 'id_test',
        //         user_id: 'user_id_test',
        //         name: 'new pack',
        //         cardsCount: 2,
        //         created: 'created test',
        //         updated: 'updated test',
        // }
            return {
                ...state,
                // name: action.name
            }

        default:
            return state
    }
}