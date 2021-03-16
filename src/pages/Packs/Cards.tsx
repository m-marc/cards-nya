import React from 'react'
import SuperButton from "../../components/SuperButton/SuperButton";
import styled from "styled-components"
import {Card} from "./Card";

type Props = {}

export const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    `
export const Table = styled.div`
   display: flex;
    width: 100vW;
    justify-content: space-evenly;
    align-items: center;
    background-color: #F0F5F1;
    padding: 5px;
    font-weight: bold;
`

export const TableItem = styled.div`
    display: block;
    width: 260px;
    height: 30px;
    &:hover{
        background-color: #eceaea;
 }
`
export const List = styled(Table)`
  border: 1px solid black;
  justify-content: space-between;
  flex-direction: column;
    font-weight: normal;
`

export const Cards = (props: Props) => {

    return (
        <>
            <CardsWrapper>
                <h1>Cards</h1>
                <Table>
                    <TableItem>Question</TableItem>
                    <TableItem>Answer</TableItem>
                    <TableItem>Grade</TableItem>
                    <TableItem>Updated</TableItem>
                    <TableItem>Url</TableItem>
                    <SuperButton>add</SuperButton>
                </Table>
                <div>
                    <List>
                        <Card/>
                        <Card/>
                        <Card/>
                    </List>
                </div>
            </CardsWrapper>
        </>
    )
}
