import React, {useState} from 'react'
import {useHistory} from "react-router-dom";
import SuperButton from "../../../components/SuperButton/SuperButton";
import SuperInput from "../../../components/SuperInput/SuperInput";
import {useDispatch} from "react-redux";
import {thunkForgotPassword} from "../../../redux/auth/thunks";

type Props = {}

export const LostPassword = (props: Props) => {
    const history = useHistory()
    const backHome = () => history.push("/")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()


    const resetPasswordHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (email === '') {
            alert("Email should be valid")
        } else {
            e.currentTarget.disabled = true
            dispatch(thunkForgotPassword(email, "test-font-admin <max@codeart.us>",
                `<div>Click<a href='http://localhost:3000/#/newpassword/$token$'>here</a> to recover your password</div>`))
        }
    }

    return <>
        <h1>Reset password</h1>
        <div>
            <label htmlFor="email-reset">Enter your email</label>
            <SuperInput id={"email-reset"} type="email" value={email}
                        name={"email"}
                        placeholder={"example@mail.com"}
                        onChange={(e) => setEmail(e.target.value)} />
            <SuperButton onClick={resetPasswordHandler}>Reset password</SuperButton>
        </div>
        <SuperButton onClick={backHome}>Back home</SuperButton>
    </>
}