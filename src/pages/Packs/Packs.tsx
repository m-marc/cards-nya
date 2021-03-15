import React from 'react'
import {List, Table, TableItem} from "./Cards";
import SuperButton from "../../components/SuperButton/SuperButton";
import {Pack} from "./Pack";

type Props = {}

export const Packs = (props: Props) => {

    return (
        <div>
            <h1>Packs</h1>
            <div>
                <Table>
                    <TableItem>Name</TableItem>
                    <TableItem>Cards Count</TableItem>
                    <TableItem>Updated</TableItem>
                    <TableItem>Url</TableItem>
                    <SuperButton>add</SuperButton>
                </Table>
                <List>
                    <Pack/>
                    <Pack/>
                    <Pack/>
                </List>
            </div>
        </div>

    )
}
