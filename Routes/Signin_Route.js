import { fetchUsers, SignIN_controller } from "../Controller/SignIn_controller.js";
import express from 'express'

const signIn_route = express.Router()



signIn_route.get('/getallusers', fetchUsers)// this fetchUsers controller will fetch all user data from the DB
signIn_route.post('/createUser', SignIN_controller) // this route will create a new user





export default signIn_route