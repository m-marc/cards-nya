import {CardPacksResponseType, GetPacksResponseType} from "../../utils/api";

export const getPacksAC = (packs: GetPacksResponseType) => ({type: 'packs/GET_PACKS', packs} as const)
// export const addPackAC = (name: string) => ({type: 'packs/ADD_PACK', name} as const)

export type PacksActionsType = ReturnType<typeof getPacksAC>