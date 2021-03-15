import React from 'react'
import SuperButton from "../../components/SuperButton/SuperButton";
import styled from "styled-components"
import {List, TableItem} from "./Cards";

type Props = {}

 const PackItem = styled.div`
 display: flex;
`


export const Pack = (props: Props) => {

    return (
        <PackItem>
            <TableItem>new Pack</TableItem>
            <TableItem>1</TableItem>
            <TableItem>{new Date().toLocaleTimeString()}</TableItem>
            <TableItem>url blalba</TableItem>
            <div>
                <SuperButton style={{padding: '8px'}}>delete</SuperButton>
                <SuperButton style={{padding: '8px'}}>update</SuperButton>
                <SuperButton style={{padding: '8px'}}>cards</SuperButton>
            </div>
        </PackItem>
    )
}
