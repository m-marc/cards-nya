import React, {useState} from 'react'
import {NavLink, Redirect} from "react-router-dom";
import {PATH} from "../../../routes/Routes";
import SuperInputText from "../../../components/SuperInput/SuperInput";
import SuperButton from "../../../components/SuperButton/SuperButton";
import SuperCheckbox from "../../../components/SuperCheckbox/SuperCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {thunkLogin} from "../../../redux/auth/thunks";
import {IGlobalState} from "../../../redux/store";
import {setError} from "../../../redux/main/appActions";
import {selectApp} from "../../../redux/Selectors";
import {FlexWrapper} from "../../../assets/styled-components";
import {Loader} from "../../../components/Loader/Loader";

export const Login = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(true)
    const {error, isLoading} = useSelector(selectApp)
    const isLoggedIn = useSelector<IGlobalState, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(error) dispatch(setError(''))
        if(event.currentTarget.type === "password") {
            setPassword(event.currentTarget.value)
        }
        else {
            setLogin(event.currentTarget.value)
        }
    };
    const onClick = () => dispatch(thunkLogin(login, password, rememberMe))
    if(isLoggedIn) return <Redirect to={PATH.PROFILE}/>

    return (
        <>
            <h1>Login</h1>
            <FlexWrapper>
                <SuperInputText value={login} onChange={onChangeHandler}/>
                <SuperInputText type={"password"} value={password} onChange={onChangeHandler}/>
                <SuperCheckbox checked={rememberMe} onChangeChecked={setRememberMe}>
                    Remember me
                </SuperCheckbox>
                <div>{Boolean(error) && <span style={{color: "red"}}>{error}</span>}</div>
                {isLoading ? <Loader /> : <></>}
                <SuperButton onClick={onClick}>Submit</SuperButton>
            </FlexWrapper>
            <NavLink to={PATH.RESET_PASS} activeClassName={"active"}>Lost password</NavLink>
        </>
    )
}
