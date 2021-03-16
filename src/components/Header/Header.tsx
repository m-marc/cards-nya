import React from 'react'
import {PATH} from "../../routes/Routes";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "../../redux/Selectors";
import SuperButton from "../SuperButton/SuperButton";
import {thunkLogOut} from "../../redux/auth/thunks";
import {Packs} from "../../pages/Packs/Packs";

export const Header = () => {
    const dispatch = useDispatch()
    const {isLoggedIn} = useSelector(selectAuth)
    const logOut = () => dispatch(thunkLogOut())


    return (
        <header className={s.header}>
            <NavLink to={PATH.TEST} activeClassName={"active"}>Home</NavLink>
            <NavLink to={PATH.PROFILE} activeClassName={"active"}>Profile</NavLink>

            {isLoggedIn
                ? <>
                    <NavLink to={PATH.PACKS} activeClassName={"active"}>Packs</NavLink>
                    <NavLink to={PATH.CARDS} activeClassName={"active"}>Cards</NavLink>
                    <SuperButton onClick={logOut} className={s.logoutBtn}>Log Out</SuperButton>
                </>
                : <>
                    <NavLink to={PATH.LOGIN} activeClassName={"active"}>Login</NavLink>
                    <NavLink to={PATH.REGISTER} activeClassName={"active"}>Sign up</NavLink>
                </>
            }

        </header>
    )
}