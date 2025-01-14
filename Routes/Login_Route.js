import express from 'express'
import { Login_controller, password_reset_mail } from '../Controller/Login_controller.js'


const Login_routes = express.Router()

Login_routes.post('/Loginuser', Login_controller)
Login_routes.post('/forgotpassword', password_reset_mail)



export default Login_routes