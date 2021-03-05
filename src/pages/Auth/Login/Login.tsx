import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "../../../routes/Routes";
import SuperInputText from "../../../components/SuperInputText/SuperInputText";
import SuperButton from "../../../components/SuperButton/SuperButton";
import SuperCheckbox from "../../../components/SuperCheckbox/SuperCheckbox";
import {useDispatch} from "react-redux";
import {loginTC} from "../../../redux/auth/thunks";

type Props = {}

export const Login = (props: Props) => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(true)
    const dispatch = useDispatch()

    const onLoginChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.currentTarget.value)
    };
    const onPasswordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    };
    const onClick = () => {
        dispatch(loginTC(login, password, rememberMe))
    };
    return (
        <>
            <h1>Login</h1>
            <div>
                <SuperInputText value={login} onChange={onLoginChangeHandler}/>
                <SuperInputText value={password} onChange={onPasswordChangeHandler}/>
                <SuperCheckbox checked={rememberMe} onChangeChecked={setRememberMe}>
                    Remember me
                </SuperCheckbox>
                <SuperButton onClick={onClick}>Login</SuperButton>
            </div>
            <NavLink to={PATH.RESET_PASS} activeClassName={"active"}>Lost password</NavLink>
            <NavLink to={PATH.NEW_PASS} activeClassName={"active"}>New password</NavLink>
        </>
    )
}
