import axios from 'axios'

const instance = axios.create({baseURL:"http://localhost:7542/2.0/"})

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

export const AuthAPI = {
    forgot: async (email: string) => {
        const response = await axios.post(`https://neko-back.herokuapp.com/2.0/auth/forgot`, {
            email,
            message: `<div style="font-size: 16px">Click the link below and you'll be redirected to a site where you can set a new password</div>
                <div><a style="${btnStyle}" href='http://localhost:3000/#/newpassword/$token$'>Set new password</a></div>`
        })
        return response.data
    },
    newpass: async (password: string, resetPasswordToken: string) => {
        const response = await instance.post(`auth/set-new-password`, {password, resetPasswordToken})
        return response.data
    }
}
