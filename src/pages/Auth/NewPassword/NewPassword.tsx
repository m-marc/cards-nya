import React, {useState} from 'react'
import {useParams} from "react-router-dom";
import SuperButton from "../../../components/SuperButton/SuperButton";
import SuperInput from "../../../components/SuperInput/SuperInput";
import {useDispatch} from "react-redux";
import {thunkSetNewPassword} from "../../../redux/auth/thunks";
type Props = {}

export const NewPassword = (props: Props) => {
    const {token} = useParams<{token: string}>()
    const [pass, setPass] = useState("")
    const dispatch = useDispatch()
    const onClickHandler = () => dispatch(thunkSetNewPassword(pass, token))

    return <>
        <h1>Set new password</h1>
        <SuperInput type="password" value={pass} onChange={(e) => setPass(e.currentTarget.value)}/>
        <SuperButton onClick={onClickHandler}>Set new password</SuperButton>
    </>
}