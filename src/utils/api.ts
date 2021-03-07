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

const instance = axios.create({baseURL:"http://localhost:7542/2.0/"})

export const AuthAPI = {
    login: (login: string, password: string, rememberMe: boolean) =>
        instance.post<LoginResponseType>("auth/login",{email: login,password,rememberMe})
}
