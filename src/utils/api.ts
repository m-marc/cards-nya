import axios from 'axios'

const instance = axios.create({baseURL:"https://neko-back.herokuapp.com/2.0/"})

export const AuthAPI = {
    forgot:(email: string, from: string, message: string) =>
        instance.post(`auth/forgot`,{email, from, message})
}
