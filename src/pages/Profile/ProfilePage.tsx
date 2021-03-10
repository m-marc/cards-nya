import React, {useEffect, useState} from 'react';
import SuperEditableSpan from "../../components/SuperEditableSpan/SuperEditableSpan";
import {useDispatch, useSelector} from "react-redux";
import {selectApp, selectAuth} from "../../redux/Selectors";
import {Redirect} from "react-router-dom"
import {PATH} from "../../routes/Routes";
import userLogo from "../../assets/img/user-logo.svg";
import {thunkUpdateProfile} from "../../redux/auth/thunks";

export const ProfilePage = () => {
    const {isLoggedIn, userData} = useSelector(selectAuth)
    const {isLoading} = useSelector(selectApp)
    const [avatar, setAvatar] = useState(userData.avatar || "")
    const [username, setUsername] = useState(userData.name || "")
    const dispatch = useDispatch()

    const update = () => dispatch(thunkUpdateProfile(username, avatar))

    if (!isLoggedIn) return <Redirect to={PATH.LOGIN} />

    return <>
        <h1>Profile page</h1>
        <div>
            <img src={userData.avatar ? userData.avatar : userLogo} alt="user-avatar" width="100"/>
            <div>
                <SuperEditableSpan
                    value={avatar}
                    onChangeText={setAvatar}
                    onBlur={update}
                    spanProps={{children: "Change avatar"}}/>
            </div>
            <div>
                username:
                <SuperEditableSpan
                    value={username}
                    onChangeText={setUsername}
                    onBlur={update}
                    spanProps={{children: userData.name ? userData.name: "Change username"}}/>
            </div>
        </div>
    </>
}