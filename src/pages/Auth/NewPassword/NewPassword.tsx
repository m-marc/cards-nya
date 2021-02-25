import React from 'react'
import {useHistory} from "react-router-dom";
import SuperButton from "../../../components/SuperButton/SuperButton";
type Props = {}

export const NewPassword = (props: Props) => {
    const history = useHistory()
    const backHome = () => history.push("/")

    return <>
        <h1>Set new password</h1>
        <SuperButton onClick={backHome}>Back home</SuperButton>
    </>
}