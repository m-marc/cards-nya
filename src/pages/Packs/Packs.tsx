import React, {useEffect, useState} from 'react'
import {List, Table, TableItem} from "./Cards";
import SuperButton from "../../components/SuperButton/SuperButton";
import {Pack} from "./Pack";
import {useDispatch, useSelector} from "react-redux";
import {IGlobalState} from "../../redux/store";
import {CardPacksResponseType, CardsAPI} from "../../utils/api";
import {thunkAddPack, thunkGetPacks} from "../../redux/packs/thunks";

type Props = {}

export const Packs = (props: Props) => {
    const packs = useSelector<IGlobalState, Array<CardPacksResponseType>>(state => state.packs.cardPacks)

    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(thunkGetPacks())
    }, [])

    const addPack = () => {
        dispatch(thunkAddPack('newPack'))
    }


    return (
        <div>
            <h1>Packs</h1>
            <div>
                <Table>
                    <TableItem>Name</TableItem>
                    <TableItem>Cards Count</TableItem>
                    <TableItem>Updated</TableItem>
                    <SuperButton onClick={addPack}>add</SuperButton>
                </Table>
                <List>
                    {
                        packs.map(p => {
                            return (
                                <>
                                    <Pack pack={p} />
                                </>
                            )
                        })
                    }

                </List>
            </div>
        </div>

    )
}
