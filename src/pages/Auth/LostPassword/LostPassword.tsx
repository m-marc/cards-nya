import React, {useEffect, useState} from 'react'
import SuperButton from "../../../components/SuperButton/SuperButton";
import SuperInput from "../../../components/SuperInput/SuperInput";
import {useDispatch, useSelector} from "react-redux";
import {thunkForgotPassword} from "../../../redux/auth/thunks";
import {selectApp} from "../../../redux/Selectors";
import {Loader} from "../../../components/Loader/Loader";
import {setError} from "../../../redux/main/appActions";
import {FlexWrapper} from "../../../assets/styled-components";

export const LostPassword = () => {
    const [email, setEmail] = useState<string>("")
    const [validation, setValidation] = useState<string>("")
    const {error, isLoading, success} = useSelector(selectApp)
    const dispatch = useDispatch()
    const regExp = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i

    const resetPasswordHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!email.match(regExp)) {
            setValidation('Email should be valid!')
        } else {
            setValidation('')
            dispatch(thunkForgotPassword(email))
        }
    }

    useEffect(() => {
        dispatch(setError(""))
        return () => {dispatch(setError(""))}
    }, [dispatch])

    return <>
        <h1>Reset password</h1>
        {success
            ? <div>We sent a recovery link to your email address: <strong>{email}</strong></div>
            : <FlexWrapper>
                <div><label htmlFor="email-reset">Enter your email:</label></div>
                <div><SuperInput id={"email-reset"} type="email" value={email}
                                 placeholder={"example@mail.com"}
                                 onChangeText={setEmail} /></div>
                {isLoading ? <Loader /> : <></>}
                <div style={{color: "red"}}>{validation}</div>
                <div>{Boolean(error) && <span style={{color: "red"}}>{error}</span>}</div>
                <SuperButton onClick={resetPasswordHandler} disabled={isLoading}>Reset password</SuperButton>
            </FlexWrapper>
        }
    </>
}