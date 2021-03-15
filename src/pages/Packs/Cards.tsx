import React from 'react'
import SuperButton from "../../components/SuperButton/SuperButton";
import styled from "styled-components"

type Props = {}

export const Cards = (props: Props) => {

    const CardsWrapper = styled.div`
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    `
    const Table = styled.div`
   display: flex;
    width: 100vW;
    justify-content: space-evenly;
    align-items: center;
    background-color: #F0F5F1;
    padding: 5px;
`
    const TableItem = styled.span`
    display: inline-block;
    width: 200px;
    height: 30px;
    &:hover{
        background-color: #eceaea;
 }
`


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
                    cards table
                    <Table>
                        <TableItem>new question</TableItem>
                        <TableItem>no answer</TableItem>
                        <TableItem>2.334553</TableItem>
                        <TableItem>{new Date().toLocaleTimeString()}</TableItem>
                        <TableItem>url blalba</TableItem>
                    </Table>
                </div>
            </CardsWrapper>
        </>
    )
}
