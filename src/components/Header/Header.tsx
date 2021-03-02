import React from 'react'
import {PATH} from "../../routes/Routes";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"

type Props = {}

export const Header = (props: Props) => {
    return (
        <header className={s.header}>
            <NavLink to={PATH.TEST} activeClassName={"active"}>Home</NavLink>
            <NavLink to={PATH.PROFILE} activeClassName={"active"}>Profile</NavLink>
            <NavLink to={PATH.LOGIN} activeClassName={"active"}>Login</NavLink>
        </header>
    )
}