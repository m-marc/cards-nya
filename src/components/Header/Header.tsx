import React from 'react'
import {PATH} from "../../routes/Routes";
import {NavLink} from "react-router-dom";

type Props = {}

export const Header = (props: Props) => {
    return (
        <header className={`header`}>
            <NavLink to={PATH.TEST} activeClassName={"active"}>Home</NavLink>
            <NavLink to={PATH.PROFILE} activeClassName={"active"}>Profile</NavLink>
            <NavLink to={PATH.LOGIN} activeClassName={"active"}>Login</NavLink>
        </header>
    )
}