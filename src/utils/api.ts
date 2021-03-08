import axios from 'axios'

const instance = axios.create({baseURL:"http://localhost:7542/2.0/"})

export const AuthAPI = {
    register: (email: string, password: string) =>  instance.post(`auth/register`, {email, password})
}
