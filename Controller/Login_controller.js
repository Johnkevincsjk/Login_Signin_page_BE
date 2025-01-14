import user_model from "../Schema/UserSchema.js"
import bcryptjs from 'bcryptjs' // Bcrypt compare password -Step 1



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