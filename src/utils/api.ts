import axios from 'axios'

type LoginResponseType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error?: string;
}
const btnStyle = `border-radius: 3px;
    background: #3aa54c;
    color: #fff;
    display: block;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25em;
    margin: 24px 0;
    padding: 10px 18px;
    text-decoration: none;
    width: 180px;
    text-align: center;`

const instance = axios.create({baseURL: "https://neko-back.herokuapp.com/2.0", withCredentials: true})

export const AuthAPI = {
    authMe: () =>
        instance.post<LoginResponseType>("auth/me", {}),

    login: (login: string, password: string, rememberMe: boolean) =>
        instance.post<LoginResponseType>("auth/login", {email: login, password, rememberMe}),

    logOut: () => instance.delete('auth/me'),

    forgot: (email: string) =>
        instance.post(`auth/forgot`, {
            email,
            message: `<div style="font-size: 16px">Click the link below and you'll be redirected to a site where you can set a new password</div>
                <div><a style="${btnStyle}" href='https://m-marc.github.io/cards-nya/#/newpassword/$token$'>Set new password</a></div>`
        }).then(r => r.data),

    newpass: (password: string, resetPasswordToken: string) =>
        instance.post(`auth/set-new-password`, {password, resetPasswordToken}).then(r => r.data),

    register: (email: string, password: string) => instance.post(`auth/register`, {email, password}),

    updateProfile: (name: string, avatar: string) => instance.put(`auth/me`, {name, avatar}).then(r => r.data)
}
