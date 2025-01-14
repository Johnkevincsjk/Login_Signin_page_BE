import mongoose from "mongoose";

const user_Schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    password: {
        type: String,
        required: true
    },
    resetToken:{
        type:String
    }
})

const user_model = mongoose.model("users", user_Schema)

export default user_model