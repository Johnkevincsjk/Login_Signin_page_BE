import express from 'express'
import DB_connection from './Config/Config.js'
import cors from 'cors'
import signIn_route from './Routes/Signin_Route.js'
const APP = express()
APP.use(cors())
APP.use(express.json())


APP.use('/api/signin', signIn_route)
DB_connection()
APP.listen(process.env.PORT, () => {
    console.log(`The server is live at port ${process.env.PORT}`)
})


