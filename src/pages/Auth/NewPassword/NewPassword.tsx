import React, {useState} from 'react'
import {useParams, Redirect} from "react-router-dom";
import SuperButton from "../../../components/SuperButton/SuperButton";
import SuperInput from "../../../components/SuperInput/SuperInput";
import {useDispatch, useSelector} from "react-redux";
import {thunkSetNewPassword} from "../../../redux/auth/thunks";
import {selectApp} from "../../../redux/Selectors";
import {Loader} from "../../../components/Loader/Loader";
import {PATH} from "../../../routes/Routes";

export const NewPassword = () => {
    const {token} = useParams<{token: string}>()
    const [pass, setPass] = useState("")
    const {error, isLoading, success} = useSelector(selectApp)
    const dispatch = useDispatch()
    const onClickHandler = () => dispatch(thunkSetNewPassword(pass, token))

    if (success) return <Redirect to={PATH.LOGIN}/>

    return <>
        <h1>Set new password</h1>
        <SuperInput type="password" value={pass} onChangeText={setPass}/>
        <SuperButton onClick={onClickHandler} disabled={isLoading}>Set new password</SuperButton>
        {isLoading ? <Loader /> : <></>}
        <div style={{color: "red"}}>{error}</div>
    </>
}