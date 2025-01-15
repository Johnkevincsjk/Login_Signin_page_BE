import express from 'express'
import { Login_controller, password_reset_mail, update_pass } from '../Controller/Login_controller.js'


const Login_routes = express.Router()

Login_routes.post('/Loginuser', Login_controller)
Login_routes.post('/forgotpassword', password_reset_mail)
Login_routes.post('/newpassword/:randamString_m',update_pass)



export default Login_routes