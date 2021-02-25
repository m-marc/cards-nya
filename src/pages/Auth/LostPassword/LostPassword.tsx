import React from 'react'
import {useHistory} from "react-router-dom";
import SuperButton from "../../../components/SuperButton/SuperButton";

type Props = {}

export const LostPassword = (props: Props) => {
    const history = useHistory()
    const backHome = () => history.push("/cards-nya")

    return <>
        <h1>Reset password</h1>
        <SuperButton onClick={backHome}>Back home</SuperButton>
    </>
}