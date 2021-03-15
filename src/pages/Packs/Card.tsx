import React from 'react'
import SuperButton from "../../components/SuperButton/SuperButton";
import styled from "styled-components"
import {List, CardsWrapper, Table, TableItem} from "./Cards";

type Props = {}

export const CardItem = styled.div`
 display: flex;
`

export const Card = (props: Props) => {

    return (
        <CardItem>
            <TableItem>new question</TableItem>
            <TableItem>no answer</TableItem>
            <TableItem>2.334553</TableItem>
            <TableItem>{new Date().toLocaleTimeString()}</TableItem>
            <TableItem>url blalba</TableItem>
            <div>
                <SuperButton>delete</SuperButton>
                <SuperButton>update</SuperButton>
            </div>
        </CardItem>
    )
}
