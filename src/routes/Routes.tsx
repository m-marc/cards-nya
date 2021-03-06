import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {ProfilePage} from "../pages/Profile/ProfilePage";
import {Error404} from "../pages/404/404";
import {TestPage} from "../pages/Test/TestPage";
import {Login} from "../pages/Auth/Login/Login";
import {Register} from "../pages/Auth/Register/Register";
import {LostPassword} from "../pages/Auth/LostPassword/LostPassword";
import {NewPassword} from "../pages/Auth/NewPassword/NewPassword";

export enum PATH {
    TEST = '/test',
    PROFILE = '/profile',
    LOGIN = '/login',
    REGISTER = '/register',
    RESET_PASS = '/lostpassword',
    NEW_PASS = '/newpassword/:token'
}

export const Routes = () => {
    return <Switch>
        <Route exact path={"/"} render={() => <Redirect to={PATH.TEST}/>}/>
        <Route path={PATH.TEST} component={TestPage}/>
        <Route path={PATH.LOGIN} component={Login}/>
        <Route path={PATH.REGISTER} component={Register}/>
        <Route path={PATH.PROFILE} component={ProfilePage}/>
        <Route path={PATH.RESET_PASS} component={LostPassword}/>
        <Route path={PATH.NEW_PASS} component={NewPassword}/>
        <Route component={Error404}/>
    </Switch>
}