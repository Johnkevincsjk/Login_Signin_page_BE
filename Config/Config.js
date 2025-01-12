import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const DB_connection = () => {
    try {
        mongoose.connect(`${process.env.DB_CONNECTION}${process.env.DB_NAME}`)
        console.log("DB connected successfully")
    } catch (error) {
        console.log("Error in connecting the DB")
        console.log(error)
    }
}

export default DB_connection