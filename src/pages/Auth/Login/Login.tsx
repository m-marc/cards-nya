import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "../../../routes/Routes";
type Props = {}

export const Login = (props: Props) => {
    return (
        <>
            <h1>Login</h1>
            <NavLink to={PATH.RESET_PASS} activeClassName={"active"}>Lost password</NavLink>
            <NavLink to={PATH.NEW_PASS} activeClassName={"active"}>New password</NavLink>
        </>
    )
}