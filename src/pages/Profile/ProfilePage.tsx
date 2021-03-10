import React from 'react';
import SuperEditableSpan from "../../components/SuperEditableSpan/SuperEditableSpan";
import userLogo from "../../assets/img/user-logo.svg"

export const ProfilePage = () => {
    return <>
        <h1>Profile page</h1>
        <div>
            <img src={userLogo} alt="user-avatar" width="100"/>
            <div>
                <SuperEditableSpan
                    value={""}
                    onChangeText={() => {}}
                    spanProps={{children: "" ? undefined : "Change avatar"}}/>
            </div>
            <div>
                username:
                <SuperEditableSpan
                    value={""}
                    spanProps={{children: "" ? undefined: "Change username"}}/>
            </div>
        </div>
    </>
}