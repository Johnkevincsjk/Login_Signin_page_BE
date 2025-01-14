import express from 'express'
import { Login_controller } from '../Controller/Login_controller.js'


const Login_routes = express.Router()

Login_routes.post('/Loginuser', Login_controller)



export default Login_routes