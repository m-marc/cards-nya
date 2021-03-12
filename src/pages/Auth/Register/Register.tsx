import React, {useState} from 'react'
import SuperInput from "../../../components/SuperInput/SuperInput";
import SuperButton from "../../../components/SuperButton/SuperButton";
import {registerTC} from "../../../redux/auth/thunks";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import {PATH} from "../../../routes/Routes";
import styled from "styled-components"
import {selectAuth} from "../../../redux/Selectors";

const ErrorWrapper = styled.div`
  color: red;
`

export const Register = () => {
    const {isLoggedIn} = useSelector(selectAuth)
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [isRegistered, setIsRegistered] = useState(false)


    const onEmailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
    };
    const onPasswordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    };

    const validateEmail = (email: string) => {
        const re = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        return re.test(email);
    }

    const onBlurValidationEmail = (event: React.FocusEvent<HTMLInputElement>) => {
        if (validateEmail(email)) {
            setEmailError('')
        } else {
            setEmailError('Incorrect email')
        }
    }
    const onBlurValidationPassword = (event: React.FocusEvent<HTMLInputElement>) => {
        if (password.length > 7) {
            setPasswordError('')
        } else {
            setPasswordError('Password should contain more than 7 symbols')
        }
    }

    const register = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (validateEmail(email)) {
            dispatch(registerTC(email, password));
            setIsRegistered(true)
        } else {
            setEmailError('Incorrect email')
        }
    };

    if (isRegistered) return <Redirect to={PATH.LOGIN}/>
    if (isLoggedIn) return <Redirect to={PATH.PROFILE}/>

    return (
        <div>
            <h1>Registration</h1>
            <div>
                <SuperInput required value={email}
                            onChange={onEmailChangeHandler}
                            onBlur={onBlurValidationEmail}
                />
                <ErrorWrapper>{emailError}</ErrorWrapper>
                <SuperInput required type='password'
                            value={password}
                            onChange={onPasswordChangeHandler}
                            onBlur={onBlurValidationPassword}/>
                <ErrorWrapper>{passwordError}</ErrorWrapper>
                <SuperButton type={"submit"} onClick={register}
                             disabled={!!(emailError || passwordError)}
                >submit</SuperButton>
            </div>
        </div>

    )
}
