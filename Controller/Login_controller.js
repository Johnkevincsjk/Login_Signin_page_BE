import user_model from "../Schema/UserSchema.js"
import bcryptjs from 'bcryptjs' // Bcrypt compare password -Step 1
import crypto from 'crypto'
import resetMail from "../Utiles/nodemailer.js"





// This controller is used for Login user
export const Login_controller = async (req, res, next) => {

    try {
        const { email, password } = req.body
        const find_user = await user_model.findOne({ email })
        const compare_pass = bcryptjs.compareSync(password, find_user.password) // Bcrypt compare password -Step 2
        if (find_user.email === email) {

            if (compare_pass) {


                return res.status(200).json({
                    Feedback: "Login Successfully",
                    User: find_user
                })
            } else {
                return res.status(401).json({
                    Feedback: "Invaild userID or password"
                })
            }
        } else {
            return res.status(404).json({
                Feedback: "Email not found : User does not exist"
            })
        }

    } catch (error) {
        return res.status(500).json({
            Feedback: "Something went wrong",
            error
        })
    }
}

// The below function this for password reset

const randamString = async (user) => {

    const randam_token = crypto.randomBytes(20).toString('hex')
    user.resetToken = randam_token
    user.save()


    return randam_token
}


export const password_reset_mail = async (req, res, next) => {
    try {
        const { email } = req.body
        const search_user = await user_model.findOne({ email })
        const randamString_mail = await randamString(search_user)

        const randamString_m = `https://localhost:8000/api/forgotpassword/${randamString_mail}`
        console.log(randamString_m)
        if (search_user) {
            const mail_sent = await resetMail(email, randamString_m)
            return res.status(200).json({
                Feedback: "Reset Pasword sent to your mail id",
                data: mail_sent
            })
        } else {
            return res.status(404).json({
                Feedback: "User does not exist !"
            })
        }
    } catch (error) {
        res.status(500).json({
            Feedback: "Password reset mail not sent",
            error
        })
    }
}