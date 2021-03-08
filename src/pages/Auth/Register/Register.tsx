import React, {useCallback, useState} from 'react'
import SuperInput from "../../../components/SuperInput/SuperInput";
import SuperButton from "../../../components/SuperButton/SuperButton";
import {registerTC} from "../../../redux/auth/thunks";
import {useDispatch} from "react-redux";
import {Redirect} from 'react-router-dom';
import {PATH} from "../../../routes/Routes";
import styled from "styled-components"

type Props = {}

const ErrorWrapper = styled.div`
color: red;
`

export const Register = (props: Props) => {
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
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const onBlurValidationEmail = (event: React.FocusEvent<HTMLInputElement>) => {
        if (validateEmail(email)) {
            setEmail(email)
            setEmailError('')
        } else {
            if (email === '') {
                setEmailError('Enter your email')
            } else {
                setEmailError('Incorrect email')
            }
        }
    }
    const onBlurValidationPassword = (event: React.FocusEvent<HTMLInputElement>) => {
        if (password.length > 7) {
            setPassword(password)
            setPasswordError('')
        } else {
            if (password === '') {
                setPasswordError('Enter your password')
            } else {
                setPasswordError('Password should contain more than 7 symbols')
            }
        }
    }

    const register = () => {
        dispatch(registerTC(email, password));
        setIsRegistered(true)
    };

    if (isRegistered) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <div>
            <h1>Registration</h1>
            <div>
                <SuperInput value={email}
                            onChange={onEmailChangeHandler}
                            onBlur={onBlurValidationEmail}
                />
                <ErrorWrapper>{emailError}</ErrorWrapper>
                <SuperInput type='password'
                            value={password}
                            onChange={onPasswordChangeHandler}
                            onBlur={onBlurValidationPassword}/>
                <ErrorWrapper>{passwordError}</ErrorWrapper>
                <SuperButton onClick={register}
                             disabled={emailError || passwordError ? true : false}
                >submit</SuperButton>
            </div>
        </div>

    )
}