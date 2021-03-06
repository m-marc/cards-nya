import axios from 'axios'

const instance = axios.create({baseURL:"http://localhost:7542/2.0/"})

export const AuthAPI = {
    forgot:(email: string, from: string, message: string) =>
        axios.post(`https://neko-back.herokuapp.com/2.0/auth/forgot`,{email, from, message}),
    newpass:(password: string, resetPasswordToken: string) =>
        instance.post(`auth/set-new-password`,{password, resetPasswordToken})
}
