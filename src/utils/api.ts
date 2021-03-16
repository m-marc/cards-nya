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
export type CardPacksResponseType = {
    _id: string,
    user_id: string,
    name: string,
    cardsCount: number,
    created: string,
    updated: string,
}
export type GetPacksResponseType = {
    cardPacks: Array<CardPacksResponseType>,
    cardPacksTotalCount: number,
    maxCardsCount: number,
    minCardsCount: number,
    page: number,
    pageCount: number
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

const instance = axios.create({baseURL: "http://localhost:7542/2.0/", withCredentials: true})

export const AuthAPI = {
    authMe: () =>
        instance.post<LoginResponseType>("auth/me", {}),

    login: (login: string, password: string, rememberMe: boolean) =>
        instance.post<LoginResponseType>("auth/login", {email: login, password, rememberMe}),

    logOut: () =>
        instance.delete('auth/me'),

    forgot: (email: string) =>
        axios.post(`https://neko-back.herokuapp.com/2.0/auth/forgot`, {
            email,
            message: `<div style="font-size: 16px">Click the link below and you'll be redirected to a site where you can set a new password</div>
                <div><a style="${btnStyle}" href='http://localhost:3000/#/newpassword/$token$'>Set new password</a></div>`
        }).then(r => r.data),

    newpass: (password: string, resetPasswordToken: string) =>
        instance.post(`auth/set-new-password`, {password, resetPasswordToken}).then(r => r.data),

    register: (email: string, password: string) => instance.post(`auth/register`, {email, password}),

    updateProfile: (name: string, avatar: string) => instance.put(`auth/me`, {name, avatar}).then(r => r.data)
}

export const CardsAPI = {

    getPacks: () => instance.get<GetPacksResponseType>(`cards/pack`),

    addPack: (name: string) => instance.post<CardPacksResponseType>(`cards/pack`, {name})
}