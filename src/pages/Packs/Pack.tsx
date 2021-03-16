import React from 'react'
import SuperButton from "../../components/SuperButton/SuperButton";
import styled from "styled-components"
import {TableItem} from "./Cards";
import {CardPacksResponseType} from "../../utils/api";

type Props = {
    pack: CardPacksResponseType
}

const PackItem = styled.div`
 display: flex;
`
const PackTableItem = styled(TableItem)`
min-width: 400px;
`

export const Pack = (props: Props) => {


    return (
        <PackItem>
            <PackTableItem>{props.pack.name}</PackTableItem>
            <PackTableItem>{props.pack.cardsCount}</PackTableItem>
            <PackTableItem>{props.pack.updated}</PackTableItem>
            <div>
                <SuperButton style={{padding: '8px'}}>delete</SuperButton>
                <SuperButton style={{padding: '8px'}}>update</SuperButton>
                <SuperButton style={{padding: '8px'}}>cards</SuperButton>
            </div>

        </PackItem>
    )
}
