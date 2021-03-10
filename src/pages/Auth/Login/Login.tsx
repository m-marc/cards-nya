import React, {useState} from 'react'
import {NavLink, Redirect} from "react-router-dom";
import {PATH} from "../../../routes/Routes";
import SuperInputText from "../../../components/SuperInput/SuperInput";
import SuperButton from "../../../components/SuperButton/SuperButton";
import SuperCheckbox from "../../../components/SuperCheckbox/SuperCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../../redux/auth/thunks";
import {IGlobalState} from "../../../redux/store";
import {setError} from "../../../redux/main/appActions";
import {selectApp, selectAuth} from "../../../redux/Selectors";

type Props = {}

export const Login = (props: Props) => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(true)
    const {error} = useSelector(selectApp)
    const {isLoggedIn} = useSelector(selectAuth)
    const dispatch = useDispatch()

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(error)
            dispatch(setError(''))
        if(event.currentTarget.type === "password") {
            setPassword(event.currentTarget.value)
        }
        else {
            setLogin(event.currentTarget.value)
        }
    };
    const onClick = () => {
        dispatch(loginTC(login, password, rememberMe))
    };
    if(isLoggedIn)
        return <Redirect to={PATH.PROFILE}/>
    return (
        <>
            <h1>Login</h1>
            <div>
                {Boolean(error) && <span>{error}</span>}
                <SuperInputText value={login} onChange={onChangeHandler}/>
                <SuperInputText type={"password"} value={password} onChange={onChangeHandler}/>
                <SuperCheckbox checked={rememberMe} onChangeChecked={setRememberMe}>
                    Remember me
                </SuperCheckbox>
                <SuperButton onClick={onClick}>Login</SuperButton>
            </div>
            <NavLink to={PATH.RESET_PASS} activeClassName={"active"}>Lost password</NavLink>
        </>
    )
}
